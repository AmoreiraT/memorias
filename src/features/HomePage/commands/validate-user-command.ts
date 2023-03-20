import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { useStorage } from '@core/cache';
import { EpmResponse, HttpStatusCode } from '@core/http/protocols';

import { UserState } from '../presentation/state/user';
import { UserDto, UserRepository, mapUserDtoToEntity } from '../repository';

type UserRepo = Pick<UserRepository, 'validateUser'>;

export const useValidateUserCommand = ({
  state,
  repository,
}: {
  state: UserState;
  repository: UserRepo;
}) => {
  const storage = useStorage('session');
  const storedToken = storage.get('token');

  const onSuccess = (
    res: EpmResponse<Omit<UserDto, 'auth_ticket'>>,
    token: string
  ) => {
    if ('error' in res) {
      state.setError({ error: res.error });
    }
    // timeout error
    if ('name' in res) {
      state.setError({
        name: res.name,
        code: res.code,
        message:
          'O servidor não está respondendo no momento. Contate o suporte.',
      });
    }
    // status code error
    else if ('status' in res && res.status !== HttpStatusCode.Ok) {
      state.setError({ status: res.status });
    }
    // api error
    else if ('data' in res && 'error' in res.data) {
      state.setError(res.data.error);
    }
    // success
    else if ('data' in res && !('error' in res.data)) {
      if (!res.data.data.success) {
        state.setError({
          name: 'validationError',
          code: '0',
          message:
            'Erro ao validar usuário. Tente logar novamente. Caso o erro persista, Contate o suporte.',
        });
      } else {
        const mappedUser = mapUserDtoToEntity({
          data: { ...res.data.data, auth_ticket: token },
        });
        state.setError(undefined);
        state.setUser(mappedUser);
      }
    }
  };
  const mutation = useMutation(
    async ({ token }: { token: string }) => repository.validateUser(token),
    {
      onSuccess: (data, variables) => onSuccess(data, variables.token),
    }
  );

  const validate = useCallback(() => {
    if (typeof storedToken === 'string') {
      mutation.mutate({ token: storedToken });
    } else {
      state.setError({
        name: 'validationError',
        code: ' 0',
        message:
          'Erro ao validar usuário. Tente logar novamente. Caso o erro persista, Contate o suporte.',
      });
    }
  }, [mutation, state, storedToken]);

  return { validate, validating: mutation.isLoading };
};

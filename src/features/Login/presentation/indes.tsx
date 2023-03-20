import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import shallow from 'zustand/shallow';
import { useTheme } from 'styled-components';

// repository
import { useUserRepository } from '@domain/entities/User';
// store
import { useUserStore } from '@shared/store';
// resources
import logo from '@resources/images/png/logo-rc.png';
import {
  IconPassword,
  IconPasswordCrossed,
  IconTwoUsers,
} from '@assets/svg/icons';
// model
import { Loader } from '@shared/components/Loader';
import { ErrorComponent } from '@shared/components/ErrorComponent';
import { Button } from '@shared/components/Button';
import { Input } from '@shared/components/Input';
import { Collapse } from '@shared/components/Collapse';
import { useLoginViewModel } from './model';
// components
import * as S from './styles';

const schema = z.object({
  username: z.string().min(1, { message: 'Digite seu usuário' }),
  password: z
    .string()
    .min(4, { message: 'Senha deve ter no mínimo 4 caracteres' }),
});

type SchemaType = z.infer<typeof schema>;
export function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const userRepo = useUserRepository();

  const userState = useUserStore(
    (state) => ({
      user: state.user,
      setUser: state.setUser,
      initialUserState: state.initialUserState,
      error: state.error,
      setError: state.setError,
    }),
    shallow
  );

  const model = useLoginViewModel(userRepo, userState);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<SchemaType> = (data) => {
    model.login({ username: data.username, password: data.password });
  };

  useEffect(() => {
    if (
      userState.user.token !== '' &&
      userState.user.success &&
      !userState.user.session.changePassword
    ) {
      navigate('/dashboard');
      window.location.reload();
    } else if (
      userState.user.token !== '' &&
      userState.user.success &&
      userState.user.session.changePassword
    ) {
      navigate('/primeiro-acesso');
    }
  }, [userState.user]);

  return (
    <S.Container>
      <S.Logo src={logo} />
      <Collapse
        open={!model.isLoading && !!userState.error}
        orientation="vertical"
      >
        <ErrorComponent
          error={
            userState.user.token === '-1'
              ? {
                  message:
                    'Sessão expirada ou finalizada. Faça login novamente.',
                  code: '-1',
                  name: 'sessionTimeout',
                }
              : userState.error
          }
          severity={userState.user.token === '-1' ? 'info' : 'warning'}
        />
      </Collapse>

      <S.TitleLogin>Faça o Login</S.TitleLogin>
      <S.Form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)}>
        <S.InputWrapper>
          <Input
            {...register('username')}
            label="Usuário"
            placeholder="Digite seu usuário"
            error={errors.username?.message}
            disabled={model.isLoading}
            useIconColor
          >
            <IconTwoUsers color={theme.color.primary[20]} />
          </Input>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            error={errors.password?.message}
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            disabled={model.isLoading}
            useIconColor
          >
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={model.isLoading}
            >
              {showPassword ? (
                <IconPassword color={theme.color.primary[20]} />
              ) : (
                <IconPasswordCrossed color={theme.color.primary[20]} />
              )}
            </button>
          </Input>
          {/* <Button
            to="/esqueci-a-senha"
            variant="text"
            style={{ alignSelf: 'flex-end' }}
          >
            Esqueci a senha
          </Button> */}
          {/* TODO: Implementar esqueci a senha */}
        </S.InputWrapper>
        {!model.isLoading ? (
          <Button type="submit" variant="filled" disabled={!isValid} fullWidth>
            Entrar
          </Button>
        ) : (
          <Loader size={4} />
        )}
      </S.Form>
    </S.Container>
  );
}

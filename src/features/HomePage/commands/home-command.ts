import { useCallback } from 'react';
// core
import { useStorage } from '@core/cache';
import { UserState } from '../presentation/state/user';
import { UserRepository } from '../repository';
import { useValidateUserCommand } from './validate-user-command';
import { logoutCommand } from './logout-command';
// domain

interface HomeModelProps {
  // menuRepository: MenuRepository;
  // homeState: PartialHomeState;
  userRepository: UserRepository;
  userState: UserState;
}
export const useHomeViewModel = ({
  userRepository,
  userState,
}: HomeModelProps) => {
  const { validate, validating } = useValidateUserCommand({
    repository: userRepository,
    state: userState,
  });
  const storage = useStorage('session');
  const validateUser = useCallback(() => {
    return validate();
  }, [userState.user, validate]);

  // const loadMenu = useFetchMenuCommand({
  //   // state: homeState,
  //   // repository: menuRepository,
  //   token: userState.user.token,
  // });

  const logout = useCallback(() => {
    logoutCommand(
      {
        setUser: userState.setUser,
        initialUserState: userState.initialUserState,
      },
      storage.remove
    );
  }, [userState.initialUserState, userState.setUser]);

  return {
    // menu: homeState.menu,
    // menuError: homeState.menuError,
    validateUser,
    validating,
    logout,
    // loadMenu,
  };
};

import { UserState } from '../presentation/state/user';

export const logoutCommand = (
  state: Pick<UserState, 'setUser' | 'initialUserState'>,
  removeFn: (key: string) => void
) => {
  removeFn('token');
  state.setUser({ ...state.initialUserState, token: '-1' });
};

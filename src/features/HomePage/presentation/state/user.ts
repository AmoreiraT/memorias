import { ErrorType } from '@core/error';
import { create } from 'zustand';
import { UserEntity } from '../../../CardholderCard/domain/repository';

export const initialUserState: UserEntity = {
  token: '',
  success: false,
  session: {
    id: -1,
    userId: -1,
    username: '',
    changePassword: false,
  },
};

export interface UserState {
  user: UserEntity;
  error: ErrorType | undefined;
  token: string;
  initialUserState: UserEntity;
  setUser: (value: UserEntity) => void;
  setError: (error: ErrorType | undefined) => void;
  setToken: (value: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: initialUserState,
  error: undefined,
  token: '',
  initialUserState,
  setUser: (value: UserEntity) => set({ user: value }),
  setError: (error: ErrorType | undefined) => set({ error }),
  setToken: (value: string) => set({ token: value }),
}));

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  isAuth: boolean;
  name: string;
  email: string;
  msg: string;
  status: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface StateProps {
  isLoading: boolean;
}

export interface AuthContextType {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  signup: (credentials: SignupCredentials) => void;
  login: (credentials: LoginCredentials) => void;
  logout: () => void;
}

export interface ITask {
  title: string;
  description: string;
  status: string;
}

export interface ITaskResponse {
  author: {
    email: string;
    fullname: string;
  };
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  status: string;
}

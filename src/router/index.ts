import Admin from '../pages/AdminPage/Admin';
import Login from '../modules/LoginForm/components/Login';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  LOGIN = '/login',
  ADMIN = '/admin',
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.LOGIN,
    exact: true,
    component: Login,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.ADMIN + '/*',
    exact: true,
    component: Admin,
  },
];

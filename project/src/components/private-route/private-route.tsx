import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({children, authorizationStatus}: PrivateRouteProps): JSX.Element {
  // const hasAccess = true;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );

  // return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;

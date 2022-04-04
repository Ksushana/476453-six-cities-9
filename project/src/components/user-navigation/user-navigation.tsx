import {Link} from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from './../../const';
import { logoutAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useSelector';
import { useAppDispatch } from '../../hooks/useDispatch';

function UserNavigation(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {authorizationStatus} = useAppSelector((state) => state);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const user = localStorage.getItem('login');

  return (
    <div>
      {isAuthorized ?
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{user}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#" onClick={() => navigate(AppRoute.Login)}>
                <span className="header__signout" onClick={(evt) => {evt.preventDefault();
                  dispatch(logoutAction());
                }}
                >Sign out
                </span>
              </Link>
            </li>
          </ul>
        </nav> :
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to="login"  >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          </ul>
        </nav>}
    </div>
  );
}

export default UserNavigation;

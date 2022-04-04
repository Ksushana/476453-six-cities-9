import {Link, Navigate, useNavigate} from 'react-router-dom';
import Header from '../../components/header/header';
import {useRef, FormEvent} from 'react';
import {loginAction} from '../../store/api-actions';
import { useAppSelector } from '../../hooks/useSelector';
import { AppRoute, AuthorizationStatus } from '../../const';
import { setUser } from '../../store/action';
import { AuthData } from '../../types/auth-data';
import { useAppDispatch } from '../../hooks/useDispatch';

function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const {authorizationStatus} = useAppSelector((state) => state);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const { city } = useAppSelector((state) => state);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch(setUser(loginRef.current.value));
      localStorage.setItem('login', loginRef.current.value);
      navigate(AppRoute.Root);
    }
  };

  return (
    <div>
      {!isAuthorized ?
        <div className="page  page--gray page--login">
          <Header hideNavigation/>
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <form className="login__form form" action="" onSubmit={handleSubmit}>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input
                      ref={loginRef}
                      className="login__input form__input"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input
                      ref={passwordRef}
                      className="login__input form__input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button className="login__submit form__submit button" type="submit">Sign in</button>
                </form>
              </section>
              <section className="locations locations--login locations--current">
                <div className="locations__item">
                  <Link to={AppRoute.Root} className="locations__item-link">
                    <span>{city}</span>
                  </Link>
                </div>
              </section>
            </div>
          </main>
        </div> :
        <Navigate to={AppRoute.Root} />};
    </div>
  );
}

export default Login;

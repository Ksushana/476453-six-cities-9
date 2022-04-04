import UserNavigation from '../user-navigation/user-navigation';
import Logo from './../logo/logo';

type HeaderProps = {
  hideNavigation?: boolean;
  isOfferLoaded?: boolean;
}

function Header({hideNavigation = false, isOfferLoaded = false} :HeaderProps = {}): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo width={81} height={61}/>
          </div>
          {!hideNavigation && <UserNavigation/>}
        </div>
      </div>
    </header>
  );
}
export default Header;

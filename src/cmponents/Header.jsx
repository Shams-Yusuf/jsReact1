import Logo from "../cmponents/Logo";
import Menu from "../cmponents/Menu";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <Logo />
        <Menu />
      </div>
    </div>
  );
}

export default Header;

import FooterLogo from "../cmponents/FooterLogo";
import FooterMenu from "../cmponents/FooterMenu";
import Copyright from "../cmponents/Copyright";
function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <FooterLogo />
        <FooterMenu />
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;

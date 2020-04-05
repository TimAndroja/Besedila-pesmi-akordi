import Navbar from "./Navbar";
import "../scss/_layout.scss";
import Navbar_noh1 from "./Navbar_noh1";
import Footer from "./Footer";

const Layout_noh1 = props => (
  <div>
    <Navbar_noh1 />
    {props.children}
    <Footer />
  </div>
);

export default Layout_noh1;

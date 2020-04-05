import Navbar from "./Navbar";
import "../scss/_layout.scss";
import Footer from "./Footer";

const Layout = props => (
  <div>
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;

import Navbar from "./Navbar";
import styles from "../scss/_layout.module.scss";
import Footer from "./Footer";

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
    <Footer />
  </div>
);

export default Layout;

import Navbar from "./Navbar";
import "../scss/layout.scss";

const Layout = props => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;

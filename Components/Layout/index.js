import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div className="my-5 mx-3 lg:mx-20">
            <Navbar/>
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;
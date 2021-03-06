import Header from './Header'
import Footer from './Footer'
function Layout({children}) {
    return ( 
            <>
                <div className="container">
                    <Header />
                    <div className="main">
                    {children}
                    </div>
                </div>
                    <Footer />
            </>
     );
}

export default Layout;
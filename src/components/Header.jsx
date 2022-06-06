import {Link, useLocation } from'react-router-dom'
import { useRef, useEffect } from 'react'
import Logo from '../assets/images/Logo-2.png'
const nav = [
    {
        title:"Trang chủ",
        path: "/"
    },
    {
        title:"Sản phẩm",
        path: "/catalog"
    },
    {
        title:"Phụ kiện",
        path: "/accessories"
    },
    {
        title:"Liên hệ",
        path: "/contact"
    }
]

function Header() {

    const { pathname } = useLocation()
    const activeNav = nav.findIndex(e => e.path === pathname)

    const headerRef = useRef()
    const headerLeftRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('shrink')
            }else{
                headerRef.current.classList.remove('shrink')
            }
        }
        window.addEventListener("scroll",handleScroll)
    }, []);
    
    const handleFadeMenu = ()=>headerLeftRef.current.classList.toggle('active')

    return ( 
        <div className="header" ref={headerRef}>
            <div className="container">
                    <div className="header-menu-icon" onClick={handleFadeMenu}>
                    <i className='bx bx-menu-alt-left' ></i>
                    </div>
                <div className="header__left" ref={headerLeftRef}>
                    <div className="header__left-close" onClick={handleFadeMenu}>
                    <i className='bx bx-chevron-left' ></i>
                    </div>
                    {
                        nav.map((item,index)=>(
                            <Link to={item.path} key={index} className={`header__left-item header__menu-item ${index === activeNav? 'active' : ''}`} onClick={handleFadeMenu}>
                                <p>{item.title}</p>
                            </Link>
                        ))
                    }
                </div>
                <Link className="header__center-logo" to="/">
                    <img className="header__center-logo-img" src={Logo} alt="logo" />
                </Link>
                <div className="header__right">
                    <div className="header__right-item header__menu-item">
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="header__right-item header__menu-item">
                    <i className='bx bx-shopping-bag' ></i>
                    </div>
                    <div className="header__right-item header__menu-item">
                    <i className='bx bx-user' ></i>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Header;
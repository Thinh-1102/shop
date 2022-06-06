import{Link} from 'react-router-dom'
import Grid from './Grid'
import Logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
    {
        title:"Giới thiệu",
        path: "/about"
    },
    {
        title:"Liên hệ",
        path: "/about"
    },
    {
        title:"Tuyển dụng",
        path: "/about"
    },
    {
        title:"Tin tức",
        path: "/about"
    },
    {
        title:"Tin tức cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        title: "Chính sách đổi trả",
        path: "/about"
    },
    {
        title: "Chính sách bảo hành",
        path: "/about"
    },
    {
        title: "Chính sách hoàn tiền",
        path: "/about"
    }
]

function Footer() {
    return ( 
        <footer className='footer'>
            <div className="container">
                <Grid
                col={4}
                mdCol={2}
                smCol={1}
                gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng &ensp;<strong>0348341012</strong>
                            </p>
                            <p>
                                thắc mắc &ensp;<strong>0348341012</strong>
                            </p>
                            <p>
                                Khiếu nại &ensp;<strong>0348341012</strong>
                            </p>
                        </div>

                    </div>
                    <div>
                        <div className="footer__title">
                            về Yolo
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item,index)=>{
                                    return(
                                        <p key={index}>
                                            <Link to={item.path}>{item.title}
                                            </Link>
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item,index)=>{
                                    return(
                                        <p key={index}>
                                            <Link to={item.path}>{item.title}
                                            </Link>
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="footer__about">
                        <p>
                            <Link to="/">
                                <img className='footer__logo' src={Logo} alt="" />
                            </Link>
                        </p>
                        <p>
                        Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống năng động, tích cực hơn.
                        </p>
                    </div>
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;
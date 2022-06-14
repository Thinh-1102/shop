import {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import Button from './Button';
import numberWithCommas from '../untils/numberWithCommas'



function ProductView(props) {
    const product = props.product
    const [img,setImg] = useState(product.image01)
    const [show,setshow] = useState(false)
    const [color,setColor] = useState(undefined)
    const [size,setSize] = useState(undefined)
    const [quaility,setQuaility] = useState(1)

    const handleShow = () =>{
        setshow(!show)
    }

    const handleReduced = () => {
        if(quaility > 1) {
            setQuaility(quaility - 1)
        }else{
            setQuaility(1)
        }
    }

    const handleIncrese = () => {
        setQuaility(quaility + 1)
    }

    const check = () => {
        if(color === undefined){
            alert('vui lòng chọn color')
            
            return false
        } 
        if(size === undefined){
            alert('vui lòng chọn size')
            return false
        } 
        return true
    }

    // useEffect = (() => {
    //     setImg(product.image01)
    //     setshow(false)
    //     setColor(undefined)
    //     setSize(undefined)
    //     setQuaility(1)
    // },[product])

    const addToCart = () => {
        if(check()){
            console.log(size,color,quaility,product.price);
        }
    }

    // điều hướng đến trang cart
    const navigate = useNavigate()
    const goToCard = () => {
        if(check())navigate("/cart")
    }

    return ( 
            <div className='product'>
                <div className="product__img">
                    <div className="product__img__list">
                        <div className="product__img__list-item">
                            <img src={product.image01} alt="" onClick={()=>setImg(product.image01)} />
                        </div>
                        <div className="product__img__list-item">
                        <img src={product.image02} alt="" onClick={()=>setImg(product.image02)} />
                        </div>
                    </div>
                    <div className="product__img__main">
                    <img src={img} alt="" />
                    </div>
                    <div className={`product-description  ${show && "active"}`}>
                        <div className="product-description__title">
                            Xem chi tiết
                        </div>
                        <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}>
                        </div>
                        <div className="product-description__toggle">
                            <Button
                                size="sm"
                                onClick={handleShow}
                            >
                                {show ? "Rút gọn" : "Xem thêm"}
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="product__info">
                    <div className="product__info__item">
                        <h3 className="product__info__item-header">
                            {product.title}
                        </h3>
                        <div className="product__info__item-price">
                            {numberWithCommas(product.price)}vnđ
                        </div>
                    </div>
                    <div className="product__info__item">
                        <h4 className="product__info__item-header">
                            Màu sắc
                        </h4>
                        <div className="product__info__item-content">
                            {
                                product.colors.map((item,index)=>(
                                    <div 
                                    className=
                                    {`product__info__item-content-color ${item === color ? "active" : ""}`}
                                     key={index}
                                     onClick={()=>setColor(item)}
                                     >
                                        <div className={`cirle bg-${item}`}>
                                            {item}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__info__item">
                        <h3 className="product__info__item-header">
                            Size
                        </h3>
                        <div className="product__info__item-content">
                        {
                                product.size.map((item,index)=>(
                                    <div 
                                    className={`product__info__item-content-size ${item === size ? "active" : ""}`}
                                    key={index}
                                    onClick={()=>setSize(item)}
                                    >
                                        <div className='cirle bg-while'>
                                            {item}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product__info__item">
                        <h3 className="product__info__item-header">
                            Số lượng
                        </h3>
                        <div className="product__info__item-content">
                            <span className='product__info__item-content-nav' onClick={handleReduced}>
                                <i className='bx bx-minus' ></i>
                            </span>
                            <span className='product__info__item-content-quaility'>{quaility}</span>
                            <span className='product__info__item-content-nav' onClick={handleIncrese}>
                                <i className='bx bx-plus' ></i>
                            </span>
                        </div>
                    </div>
                    <div className="product__info__btns">
                        <Button
                        size='sm'
                        icon='bx bx-cart-alt'
                        animate
                        onClick={addToCart}
                        >Thêm vào giỏ</Button>
                        <Button
                        size='sm'
                        icon='bx bx-cart-alt'
                        animate
                        onClick={goToCard}
                        >Mua ngay</Button>
                    </div>
                </div>
                <div className={`product-description product-description-mobile  ${show && "active"}`}>
                        <div className="product-description__title">
                            Xem chi tiết
                        </div>
                        <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}>
                        </div>
                        <div className="product-description__toggle">
                            <Button
                                size="sm"
                                onClick={handleShow}
                            >
                                {show ? "Rút gọn" : "Xem thêm"}
                            </Button>
                        </div>
                    </div>
            </div> 
    );
}
ProductView.prototype= {
    product: PropTypes.object.isRequired,
}
export default ProductView;
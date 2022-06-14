import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import Button from './Button'
import numberWithCommas from '../untils/numberWithCommas'
function ProductCart(props) {
    return ( 
        <div className="product-card">
            <Link to={`/catalog/${props.slug}`}> 
                <div className="product-card__img">
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <div className="product-card__title">
                    <h4>{props.title}</h4>
                </div>
                <div className="product-card__price">
                    <span>
                        {numberWithCommas(props.price)}
                        <del className="product-card__price__old">399,999đ</del>
                    </span>
                </div>
            </Link>
            <div className="product-card__btn">
                <Button
                    size='sm'
                    icon='bx bx-cart'
                    animate={true}
                >
                    Chọn mua
                </Button>
            </div>
        </div>
     );
}

ProductCart.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProductCart;
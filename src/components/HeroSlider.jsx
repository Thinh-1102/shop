import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'
function HeroSlider(props) {
    const data = props.data
    const timeOut = props.timeOut? props.timeOut : 3000
    const [id,setId] = useState(0)


    
    const nextSlider = () => {
        setId(id >= (data.length) - 1 ? 0: id + 1 )
    }

    const prevSlider = useCallback(
            () => {
                setId(id <= 0 ? (data.length) - 1: id - 1 )        
        },
        [id,data]
    )

    useEffect(()=>{
        if(props.auto){
            const slideAuto = setInterval(()=>{
                nextSlider(data.length)
            },timeOut);
            return () => {
                clearInterval(slideAuto)
            }
        }
    },[nextSlider,timeOut,props])
    return (
        <div className='hero-slider'>
            {data.map((item,index)=>(
                <div key={index} className={`hero-slider__item ${id === index ? 'active' : ''}`}>
                    <div className={`hero-slider__item-info ${id === index ? 'active' : ''}`}>
                    <h3 className={`hero-slider__item-info-title color-${item.color}`}>{item.title}</h3>
                    <p className="hero-slider__item-info-desc">{item.description}</p>
                    <Link to={item.path} className={`hero-slider__item-info-btn bg-${item.color}`}>
                        <Button
                            backgroundColor={item.color}
                            icon="bx bx-cart"
                            animate={true}
                            size='sm'
                        >
                            <p>Xem chi tiết</p>
                        </Button>
                    </Link>
                    </div>
                    <div className="hero-slider__item-img">
                    <div className={`shape bg-${item.color}`}></div>
                    <img src={item.img} alt="" />
                    </div>
                    {
                        <div className="hero-slider__nav">
                        <i className='bx bx-chevron-left' onClick={prevSlider} ></i>
                        <span>{`${index+1}/${data.length}`}</span>
                        <i className='bx bx-chevron-right' onClick={nextSlider} ></i>
                    </div>
                    }
                </div> 
            ))}
        </div>
        );
}

HeroSlider.propTypes = {
    data: PropTypes.array.isRequired,
    auto: PropTypes.bool,
    timeOut: PropTypes.number
}

export default HeroSlider;
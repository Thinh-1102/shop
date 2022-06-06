import PropTypes from 'prop-types'

function Policy(props) {
    return ( 
        <div className="policy-card">
            <div className="policy-card__icon">
                <i className={props.icon}></i>
            </div>
            <div className="policy-card__info">
                <div className="policy-card__info__name">
                    <h3>{props.name}</h3>
                </div>
                <div className="policy-card__info__desc">
                    <p>{props.desc}</p>
                </div>
            </div>
        </div>
     );
}

Policy.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Policy;
import PropTypes from 'prop-types'
import { useRef } from 'react'
function CheckBox(props) {
    const inputRef = useRef()

    const onChange = () => {
        if(props.onChange)
        {
            props.onChange(inputRef.current)
        }
    }

    return ( 
        <label className='custom-checkbox'>
            <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
            <span className='custom-checkbox__checkmark'>
                <i className='bx bx-check'></i>
            </span>
            <div className='custom-checkbox__label'>{props.label}</div>
        </label>
     );
}

CheckBox.propTypes = {
    label:PropTypes.string.isRequired,
    checked:PropTypes.bool,
}

export default CheckBox;
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({color, text, onAdd, link}) => {
   
    return (
        <Link to = {link}>
            <button onClick = {onAdd} style = {{backgroundColor: color}}>{text}</button>
        </Link>
    )   
}

Button.defaultProps= {
    color : 'steelBlue',
    text : 'Add',
}

Button.propTypes= {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func
}

export default Button

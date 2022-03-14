import propTypes from 'prop-types'

const Button = ({text}) => {

    const onClick = () => {
        
    }

    return <button className="btn" onClick={onClick}>{text}</button>

}

Button.defaultProps = {
    text: "new",
}

Button.propTypes = {
    text: propTypes.string,
}


export default Button
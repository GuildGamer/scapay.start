import { Store } from 'react-notifications-component'
// import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import propTypes from 'prop-types';


const Notification = ({message, title, type}) => {
    
        return(
            Store.addNotification({
            title: title,
            message: message,
            type: type,
            insert: "top",
            container: "center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
            duration: 5000,
            onScreen: true
            }
        })
        );
} 

Notification.defaultProps = {
    type: "success",
    message: "test",
    title: "test"
}

Notification.propTypes = {
    type: propTypes.string,
    message: propTypes.string,
    title: propTypes.string,
}

export default Notification
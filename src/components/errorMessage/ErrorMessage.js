import img from './error.gif'

export const ErrorMessage = () => {
    return (
        <img  style ={{display: 'block'}} src={img} alt="error"/>
    )
}

export default ErrorMessage;
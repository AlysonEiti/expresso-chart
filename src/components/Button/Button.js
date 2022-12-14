import './Button.css';

const Button = (props) => {
    return (
        <div>
            <button className='button'>{props.children}</button>
        </div>
    )
}

export default Button;
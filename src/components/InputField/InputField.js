import './InputField.css'; 

const InputField = (props) => {

    const whenDigit = (event) => {
        props.whenChanged(event.target.value);
    }

    return (
        <div className={`input-field input-${props.type}`}>
            <label>
                {props.label}
            </label>
            <input type={props.type} value={props.value} onChange={whenDigit} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputField;
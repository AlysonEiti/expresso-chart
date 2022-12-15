import './InputText.css'; 

const InputText = (props) => {

    const whenDigit = (event) => {
        props.whenChanged(event.target.value);
    }

    return (
        <div className="input_text">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenDigit} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText;
import './SelectOption.css';

const DropDown = (props) => {
    return (
        <div className='select-option'>
            <label>{props.label}</label>
            <select onChange={event => props.whenChanged(event.target.value)} required={props.required} value={props.value}>
                <option key='' selected disabled></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown;
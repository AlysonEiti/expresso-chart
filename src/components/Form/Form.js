import InputText from '../InputText/InputText';
import './Form.css';

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Fill the fields to creat a colaborator card</h2>
                <InputText label="Name" placeholder="Inform your name..." />
                <InputText label="Occuppation" placeholder="Inform your job..." />
                <InputText label="Image" placeholder="Inform image URL..." />
            </form>
        </section>
    )
}

export default Form;
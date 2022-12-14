import SelectOption from '../SelectOption/SelectOption';
import InputText from '../InputText/InputText';
import './Form.css';
import Button from '../Button/Button';

const Form = () => {

    const teams = [
        'TI, Developer & Suport',
        'MIS, Finantial & BI',
        'Project',
        'Others Teams',
        'Departments'
    ]

    const saveForm = (event) => {
        event.preventDefault();
        console.log('Form was submit');
    }

    return (
        <section className="form">
            <form onSubmit={saveForm}>
                <h2>Fill the fields to creat a colaborator card</h2>
                <InputText label="Name" required={true} placeholder="Inform your name..." />
                <InputText label="Occuppation" required={true} placeholder="Inform your job..." />
                <InputText label="Image" placeholder="Inform image URL..." />
                <SelectOption label="Team" required={true} itens={teams} />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;
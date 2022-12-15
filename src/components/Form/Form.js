import SelectOption from '../SelectOption/SelectOption';
import InputText from '../InputText/InputText';
import './Form.css';
import Button from '../Button/Button';
import { useState } from 'react';

const Form = (props) => {

    const teams = [
        'TI, Developer & Suport',
        'MIS, Finantial & BI',
        'Project',
        'Others Teams',
        'Departments'
    ]

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const saveForm = (event) => {
        event.preventDefault();
        props.whenNewColaborator({name, occupation, image, team})
    }

    return (
        <section className="form">
            <form onSubmit={saveForm}>
                <h2>Fill the fields to creat a colaborator card</h2>
                <InputText 
                    label="Name" 
                    required={true} 
                    placeholder="Inform your name..." 
                    value={name} 
                    whenChanged={value => setName(value)} 
                />
                <InputText 
                    label="Occupation" 
                    required={true} 
                    placeholder="Inform your job..."
                    value={occupation} 
                    whenChanged={value => setOccupation(value)}  
                />
                <InputText 
                    label="Image" 
                    placeholder="Inform image URL..." 
                    value={image} 
                    whenChanged={value => setImage(value)} 
                />
                <SelectOption 
                    label="Team" 
                    required={true} 
                    itens={teams}
                    value={team}
                    whenChanged={value => setTeam(value)} />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;
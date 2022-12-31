import SelectOption from '../SelectOption/SelectOption';
import InputText from '../InputField/InputField';
import './Form.css';
import Button from '../Button/Button';
import { useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');
    const [teamName, setTeamName] = useState('');
    const [teamColor, setTeamColor] = useState('');

    const saveForm = (event) => {
        event.preventDefault();
        props.whenNewColaborator({name, occupation, image, team})
        setName('');
        setOccupation('');
        setImage('');
        setTeam('');
    }

    return (
        <section className="form-container">
            <form className="form" onSubmit={saveForm}>
                <h2>Fill the fields to create a colaborator card</h2>
                <InputText 
                    type="text"
                    label="Name" 
                    required={true} 
                    placeholder="Inform your name..." 
                    value={name} 
                    whenChanged={value => setName(value)} 
                />
                <InputText 
                    type="text"
                    label="Occupation" 
                    required={true} 
                    placeholder="Inform your job..."
                    value={occupation} 
                    whenChanged={value => setOccupation(value)}  
                />
                <InputText 
                    type="text"
                    label="Image" 
                    placeholder="Inform image URL..." 
                    value={image} 
                    whenChanged={value => setImage(value)} 
                />
                <SelectOption 
                    type="text"
                    label="Team" 
                    required={true} 
                    itens={props.teams}
                    value={team}
                    whenChanged={value => setTeam(value)} />
                <Button>Create Card</Button>
            </form>
            <form className="form" onSubmit={(event) => {
                event.preventDefault();
                setTeamName('');
                setTeamColor('');
                props.registerTeam({ name: teamName, color: teamColor });
            }}>
                <h2>Fill the fields to create a new team.</h2>
                <InputText 
                    type="text"
                    label="Team name" 
                    required={true} 
                    placeholder="Inform new team" 
                    value={teamName} 
                    whenChanged={value => setTeamName(value)} 
                />
                <InputText 
                    type="color"
                    label="Team color" 
                    required={true} 
                    placeholder="Inform color of team"
                    value={teamColor} 
                    whenChanged={value => setTeamColor(value)}  
                />
                <Button>Create Team</Button>
            </form>
        </section>
    )
}

export default Form;
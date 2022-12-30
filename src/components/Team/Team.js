import Colaborator from '../Colaborator/Colaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    const css = { backgroundImage: 'url(/images/background.png)', backgroundColor: hexToRgba(props.color, '0.4') }
    
    return (
        (props.colaborators.length > 0) ? 
        <section className="team" style={css}>
            <input value={props.color} type="color" className="input-color" onChange={event => props.changeColor(event.target.value, props.name)}/>
            <h3 style={{ borderColor: props.color  }}>{props.name}</h3>
            <div className="colaborators">
                {props.colaborators.map( colaborator => {
                    return (
                        <Colaborator backgroundColor={props.color} key={colaborator.name} name={colaborator.name} occupation={colaborator.occupation} image={colaborator.image} whenDelete={props.whenDelete}/>
                    )
                }) }
            </div>
        </section>
        : ''
    );
}

export default Team; 
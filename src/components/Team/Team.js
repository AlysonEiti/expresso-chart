import Colaborator from '../Colaborator/Colaborator';
import './Team.css';

const Team = (props) => {
    const css = { backgroundColor: props.secondaryColor }
    
    return (
        (props.colaborators.length > 0) ? 
        <section className="team" style={css}>
            <h3 style={{ borderColor: props.primaryColor  }}>{props.name}</h3>
            <div className="colaborators">
                {props.colaborators.map( colaborator => {
                    //console.log(<Colaborator backgroundColor={props.primaryColor} key={colaborator.name} name={colaborator.name} occupation={colaborator.occupation} image={colaborator.image} whenDelete={props.whenDelete}/>);
                    return (
                        <Colaborator backgroundColor={props.primaryColor} key={colaborator.name} name={colaborator.name} occupation={colaborator.occupation} image={colaborator.image} whenDelete={props.whenDelete}/>
                    )
                }) }
            </div>
        </section>
        : ''
    );
}

export default Team; 
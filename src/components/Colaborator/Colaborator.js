import './Colaborator.css';
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborator = ({name, occupation, image, backgroundColor, whenDelete}) => {
    return (
        <div className="colaborator">
            <AiFillCloseCircle size={25} className="remove" onClick={whenDelete} />
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={image} alt={name}/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{occupation}</h5>
            </div>
        </div>
    )
}

export default Colaborator;
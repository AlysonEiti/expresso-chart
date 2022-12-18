import './Colaborator.css';

const Colaborator = ({name, occupation, image, backgroundColor}) => {
    return (
        <div className="colaborator">
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
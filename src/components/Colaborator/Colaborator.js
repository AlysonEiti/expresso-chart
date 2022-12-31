import './Colaborator.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborator = ({colaborator, backgroundColor, whenDelete, whenFavorite}) => {

    function auxFavorite() {
        whenFavorite(colaborator.id);
    }

    const propsFavorite = {
        size: 25,
        onClick: auxFavorite
    }

    return (
        <div className="colaborator">
            <AiFillCloseCircle 
                size={25} 
                className="remove" 
                onClick={() => whenDelete(colaborator.id)} 
            />
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={colaborator.image} alt={colaborator.name}/>
            </div>
            <div className='footer'>
                <h4>{colaborator.name}</h4>
                <h5>{colaborator.occupation}</h5>
                <div className="favorite">
                    {colaborator.favorite ? 
                        <AiFillHeart {...propsFavorite} color="#FF0000" /> : 
                        <AiOutlineHeart {...propsFavorite} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborator;
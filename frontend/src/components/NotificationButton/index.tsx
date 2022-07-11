import './styles.css';
import Imgbox from '../../assets/img/Vector.svg';

export const NotificationButton = () => {
    return (
        <div className="dsmeta-red-btn-container">
            <div className="dsmeta-red-btn">
            <img src={Imgbox} alt="Notificação" />
            </div>
        </div>
    );  
}
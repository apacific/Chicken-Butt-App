import Note from '../../../assets/images/Mysterious-note.png';
import Styles from './Napkin.module.css';

const Napkin = () => {
    return (
        <div>
            <a href='/home'>
                <img className={Styles.Napkin} src={Note} alt="note written on napkin"></img>
            </a>
        </div>
    );
};

export default Napkin;

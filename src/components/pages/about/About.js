import Logo from '../../../assets/images/Chicken-Butt-logo-modern.png';
import Styles from './About.module.css';

const About = () => {
    return (
        <div className={Styles.About}>
            <a href='/home'><img className={Styles.Logo} src={Logo} alt=""></img></a>
            <span className={Styles.Story}><p>One summer morning in 1973,</p></span>
            <span className={Styles.Story}><p>founding member Lonell Boudreaux woke up next to the dumpster behind Lem's Bar-B-Q on 75th Street</p></span>
            <span className={Styles.Story}><p>with a crushing hangover and no recollection of the events of the night before.</p></span>
            <span className={Styles.Story}><p>His pockets were empty aside from <a href='/napkin'>a note scrawled on a napkin.</a></p></span>
        </div>
    );
};

export default About;

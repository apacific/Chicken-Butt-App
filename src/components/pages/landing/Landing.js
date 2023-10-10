import Logo from '../../../assets/images/CB-logo.png';
import Styles from './Landing.module.css'

const Landing = () => {
    return (
        <div className={Styles.Landing}>
            <a className={Styles.Link} href='/home'>
                <div>
                    <img src={Logo} alt='logo' />
                </div>
                <div>
                    enter
                </div>
            </a>
        </div>
    )
}

export default Landing;

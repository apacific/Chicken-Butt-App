import Styles from './Nav.module.css';

const Nav = () => {
    return (
        <div className={Styles.NavLinks}>
            <a href="/about" className={Styles.Link}>about</a>
            <a href="/members" className={Styles.Link}>members</a>
            <a href="/press" className={Styles.Link}>press</a>
            <a href="/media" className={Styles.Link}>media</a>
        </div>
    );
};

export default Nav;

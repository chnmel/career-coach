import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => 
    {
        return (
            <div className={styles.container}>
                <Link to='/' className={styles.logoLink} >
                    <span className={styles.logo}>CareerCoach</span>
                </Link>
            </div>
        );
    }

export default Header;
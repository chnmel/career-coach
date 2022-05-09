import styles from './Header.module.scss';

const Header = () => 
    {
        return <div className={styles.container}>
            <span className={styles.logo}>CareerCoach</span>
        </div>
    }

export default Header;
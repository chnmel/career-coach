import { Link } from 'react-router-dom';
import styles from './Footer.module.scss'
import settings from '../../../assets/settings.png';
import home from '../../../assets/home.png';

const Footer = () => {
  let showSettings = () => {
    console.log("Show settings screen"); //TODO: Add settings screen
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnRow}>
        <Link  to='/' className={`${styles.btnLink} ${styles.btn}`}>
          <img src={settings} alt="settings" className={styles.btnImg} />
        </Link>
        <Link  to='/' className={`${styles.btnLink} ${styles.btn}`}>
          <img src={home} alt="home" className={styles.btnImg} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;

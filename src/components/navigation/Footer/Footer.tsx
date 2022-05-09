import styles from './Footer.module.scss'
import settings from '../../../assets/settings.png';
import home from '../../../assets/home.png';

const Footer = () => {
  let showSettings = () => {
    console.log("Show settings screen"); //TODO: Add settings screen
  };

  let navigateToHome = () => {
    console.log("Navigate to home screen"); //TODO: Add home screen
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnRow}>
        <div>
          <button className={styles.btn}>
            <img src={settings} alt="settings" className={styles.btnImg} onClick={showSettings} />
          </button>
        </div>
        <div>
          <button className={styles.btn}>
            <img src={home} alt="home"  className={styles.btnImg} onClick={navigateToHome} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

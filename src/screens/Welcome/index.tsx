import React from 'react';
import TaskCard from '../../components/TaskCard';
import styles from './Welcome.module.scss';
import WelcomeTaskCards from '../../assets/WelcomeTaskCards';

const Welcome = () => {
  const taskCardsView = WelcomeTaskCards.map((item) => 
   <TaskCard title={item.title} content={item.content}/>
  );


  return (
    <div className={styles.container}>
      {taskCardsView}
    </div>
  );
}

export default Welcome;

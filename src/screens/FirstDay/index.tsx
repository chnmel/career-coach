import React from 'react';
import TaskCard from '../../components/TaskCard';
import styles from './FirstDay.module.scss';
import FirstDayTaskCards from '../../assets/FirstDayTaskCards';

const FirstDay = () => {
  const taskCardsView = FirstDayTaskCards.map((item) => 
   <TaskCard title={item.title} content={item.content}/>
  );


  return (
    <div className={styles.container}>
      {taskCardsView}
    </div>
  );
}

export default FirstDay;

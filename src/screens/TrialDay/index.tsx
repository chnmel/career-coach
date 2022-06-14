import React from 'react';
import TaskCard from '../../components/TaskCard';
import styles from './TrialDay.module.scss';
import TrialDayTaskCards from '../../assets/TrialDayTaskCards';

const TrialDay = () => {
  const taskCardsView = TrialDayTaskCards.map((item) => 
   <TaskCard title={item.title} content={item.content}/>
  );


  return (
    <div className={styles.container}>
      {taskCardsView}
    </div>
  );
}

export default TrialDay;

import React from 'react';
import TaskCard from '../../components/TaskCard';
import styles from './AdmissionExam.module.scss';
import AdmissionExamTaskCards from '../../assets/AdmissionExamTaskCards';

const AdmissionExam = () => {
  const taskCardsView = AdmissionExamTaskCards.map((item) => 
   <TaskCard title={item.title} content={item.content}/>
  );


  return (
    <div className={styles.container}>
      {taskCardsView}
    </div>
  );
}

export default AdmissionExam;

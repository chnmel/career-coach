import React from 'react';
import TaskCard from '../../components/TaskCard';
import styles from './EducationType.module.scss';
import EducationTypeTaskCards from '../../assets/EducationTypeTaskCards';

const EducationType = () => {
  const taskCardsView = EducationTypeTaskCards.map((item) => 
   <TaskCard title={item.title} content={item.content}/>
  );


  return (
    <div className={styles.container}>
      {taskCardsView}
    </div>
  );
}

export default EducationType;

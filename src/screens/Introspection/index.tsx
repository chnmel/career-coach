import React from 'react';
import TaskCard from '../../components/TaskCard';
import styles from './Introspection.module.scss';
import IntrospectionTaskCards from '../../assets/IntrospectionTaskCards';

const Introspection = () => {
  const taskCardsView = IntrospectionTaskCards.map((item) => 
   <TaskCard title={item.title} content={item.content}/>
  );


  return (
    <div className={styles.container}>
      {taskCardsView}
    </div>
  );
}

export default Introspection;

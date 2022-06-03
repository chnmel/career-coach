import React, { useState } from 'react';
import styles from './TaskCard.module.scss';
import colors from '../../theme/colors';

type TaskCardProps = {
    title: string,
    content: string,
}

const TaskCard = (props:any) => {
    const [isDone, setIsDone] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container} style={{backgroundColor: isDone ? colors.yellow : 'white'}}>
            <div className={styles.btnContainer}>
                <h1 className={styles.title}>{props.title}</h1>
                <input type={'checkbox'} onClick={() => setIsDone(!isDone)} className={styles.btnDone}/>
            </div>
            {isOpen && <div className={styles.content} >
                {props.content.map((item:any) => <div className={styles.contentLine}>{item}</div>)}
            </div>}
                <button onClick={() => setIsOpen(!isOpen)} className={styles.btnDone}>
                    {isOpen ? 'Verstecken' : 'Anzeigen'}
                </button>
        </div>
    )
}

export default TaskCard;
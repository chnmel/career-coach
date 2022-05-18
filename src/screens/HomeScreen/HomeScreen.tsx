import React from 'react';
import StepButton from '../../components/StepButton';
import styles from './HomeScreen.module.scss';

import iconCVActive from '../../assets/btn_CV_active.png';
import iconCVInactive from '../../assets/btn_CV_inactive.png';

const listSteps = [
    {
        id: 0,
        iconSrcActive: iconCVActive,
        iconSrcInactive: iconCVInactive,
        title: 'Lerne Dich kennen',
        status: 'inactive',
    },
    {
        id: 1,
        iconSrcActive: iconCVActive,
        iconSrcInactive: iconCVInactive,
        title: 'Lerne Dich kennen',
        status: 'active',
    },
    {
        id: 2,
        iconSrcActive: iconCVActive,
        iconSrcInactive: iconCVInactive,
        title: 'Lerne Dich kennen',
        status: 'done',
    },

]


const HomeScreen = () => {

    const stepsView = listSteps.map((item) => 
    //<p>{item.id}</p>
     <StepButton size={100} title={item.title} iconSrcActive={item.iconSrcActive} iconSrcInactive={item.iconSrcInactive} buttonType={item.status}/>
    );

    return (
        <div>{stepsView}</div>
    );
}

export default HomeScreen;
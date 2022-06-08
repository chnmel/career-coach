import React from 'react';
import { Link } from "react-router-dom";

import styles from './StepButton.module.scss';
import colors from '../../theme/colors';

type StepButtonProps = {
    size: number, // size in rem
    title: string,
    buttonType: string, //'inactive' | 'active' | 'done',
    iconSrcActive: string,
    iconSrcInactive: string,
    screenLink: string,
}

const StepButton = (props:StepButtonProps) => {
    const size = props.size;
    const circleWidth = size * 0.1;
    const buttonType = props.buttonType;
    const ringColor = buttonType === 'active' ? colors.yellow : colors.lightgrey;
    const buttonColor = buttonType === 'inactive' ? colors.lightgrey : buttonType === 'done' ? colors.yellow : colors.green;
    const iconSrc = buttonType === 'active' ? props.iconSrcActive : props.iconSrcInactive;
    const iconOpacity = buttonType === 'active' ? 1 : .5;
    
    return (
        <Link to={props.screenLink} className={`
            ${buttonType === 'inactive' ? styles.linkInactive : styles.linkActive}
        `}>
            <div className={styles.container} style={{width: 2*size + 'rem'}}>
                <div className={styles.outerRing} style={
                    {
                        height: size + 'rem',
                        width: size + 'rem',
                        borderWidth: circleWidth + 'rem',
                        borderColor: ringColor,
                        padding: circleWidth/2 + 'rem',
                    }
                }>
                    <div className={styles.center} style={{backgroundColor: buttonColor}}>
                        <img className={styles.icon} src={iconSrc} alt={props.title} style={{opacity: iconOpacity}}/>
                    </div>
                </div>
                    <h3 className={styles.title} style={{fontSize: size*0.2 + 'rem'}}>{props.title}</h3>
            </div>
        </Link>
    );
};

export default StepButton;
import React from 'react';
import styles from './StepButton.module.css';
import colors from '../../theme/colors';

type StepButtonProps = {
    size: number,
    title: string,
    buttonType: 'inactive' | 'active' | 'done',
    iconSrcActive: string,
    iconSrcInactive: string,
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
        <div className={styles.container} style={{maxWidth: 2*size + 'px'}}>
            <div className={styles.outerRing} style={
                {
                    height: size + 'px',
                    width: size + 'px',
                    borderWidth: circleWidth + 'px',
                    borderColor: ringColor,
                    padding: circleWidth/2 + 'px',
                }
            }>
                <div className={styles.center} style={{backgroundColor: buttonColor}}>
                    <img className={styles.icon} src={iconSrc} alt={props.title} style={{opacity: iconOpacity}}/>
                </div>
            </div>
                <h3 className={styles.title} style={{fontSize: size*0.2 + 'px'}}>{props.title}</h3>
        </div>
    );
};

export default StepButton;
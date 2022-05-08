import React from 'react';
import styles from './StepButton.module.css';
import colors from '../../theme/colors';

type StepButtonProps = {
    size: number,
    title: string,
    buttonType: 'inactive' | 'active' | 'done',
}

const StepButton = (props:StepButtonProps) => {
    const size = props.size;
    const circleWidth = size * 0.1;
    const buttonType = props.buttonType;
    const ringColor = buttonType == 'active' ? colors.orange : colors.lightgrey;
    const buttonColor = buttonType == 'inactive' ? colors.lightgrey : buttonType == 'done' ? colors.orange : colors.green;
    const iconSrc = buttonType == 'active' ? 'https://cdn-icons-png.flaticon.com/512/942/942748.png' : 'https://cdn-icons-png.flaticon.com/512/942/942799.png';
    const iconOpacity = buttonType == 'active' ? 1 : .5;
    
    return (
        <div className={styles.container} style={{maxWidth: 2*size}}>
            <div className={styles.outerRing} style={
                {
                    height: size, 
                    width: size,
                    borderWidth: circleWidth,
                    borderColor: ringColor,
                    padding: circleWidth/2,
                }
            }>
                <div className={styles.center} style={{backgroundColor: buttonColor}}>
                    <img className={styles.icon} src={iconSrc} alt={props.title} style={{opacity: iconOpacity}}/>
                </div>
            </div>
                <h3 className={styles.title} style={{fontSize: size*0.2}}>{props.title}</h3>
        </div>
    );
};

export default StepButton;
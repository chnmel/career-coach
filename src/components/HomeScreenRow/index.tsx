import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import StepButton from "../../components/StepButton";
import styles from "./HomeScreenRow.module.scss";

import colors from '../../theme/colors';

type HomeScreenRowProps = {
    id: number,
    title: string,
    buttonType: string, //'inactive' | 'active' | 'done',
    iconSrcActive: string,
    iconSrcInactive: string,
    screenLink: string,
}

const HomeScreenRow = (props:HomeScreenRowProps) => {

    const buttonSide = props.id % 2 === 0 ? 'left' : 'right';

    // Media Queries
    const phone = useMediaQuery({ query: "(max-width: 767px)" });
    const tablet = useMediaQuery({
        query: "(min-width: 768px) and (max-width: 1024px)",
    });
    const desktop = useMediaQuery({ query: "(min-width: 1025px)" });

    // Returns step button size based on screen size (phone/tablet/desktop)
    function returnStepbuttonSize(): number {
        if (phone) {
            return 4;
        } else if (tablet) {
            return 7;
        } else {
            return 7;
        }
    };

    return (
        <div className={styles.containerRow}>
            { buttonSide === 'right' &&
                <div className={`
                        ${styles.containerLine} 
                        ${styles.containerLineLeft}
                    `} 
                    style={{
                        marginTop: returnStepbuttonSize() * 1.6 + 'rem',
                        marginLeft: returnStepbuttonSize() + 'rem',
                        marginRight: - (20 - props.title.length) / (2 * returnStepbuttonSize()) + 'rem',
                        borderColor: props.buttonType === 'inactive' ? colors.lightgrey : colors.darkgrey,
                    }}
                />
            }
            <StepButton
                size={returnStepbuttonSize()}
                title={props.title}
                iconSrcActive={props.iconSrcActive}
                iconSrcInactive={props.iconSrcInactive}
                buttonType={props.buttonType}
                screenLink={props.screenLink}
            />
            { buttonSide === 'left' && props.id !== 0 &&
                <div className={`
                        ${styles.containerLine} 
                        ${styles.containerLineRight}
                        ${props.id === 0 && styles.hidden}
                    `} 
                    style={{
                        marginTop: returnStepbuttonSize() * 1.6 + 'rem',
                        marginRight: returnStepbuttonSize() + 'rem',
                        marginLeft: - (20 - props.title.length) / (2 * returnStepbuttonSize()) + 'rem',
                        borderColor: props.buttonType === 'inactive' ? colors.lightgrey : colors.darkgrey,
                    }}
                />
            }
        </div>

    );
};

export default HomeScreenRow;
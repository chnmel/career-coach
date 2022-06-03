import React from "react";
import { Link } from "react-router-dom";
import StepButton from "../../components/StepButton";
import styles from "./HomeScreen.module.scss";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useMediaQuery } from "react-responsive";

import iconCVActive from "../../assets/btn_CV_active.png";
import iconCVInactive from "../../assets/btn_CV_inactive.png";
import iconProfFieldsActive from "../../assets/btn_ProfessionalFields_active.png";
import iconProfFieldsInactive from "../../assets/btn_ProfessionalFields_inactive.png";
import iconTestActive from "../../assets/btn_Test_active.png";
import iconTestInactive from "../../assets/btn_Test_inactive.png";

const listSteps = [
  {
    id: 0,
    iconSrcActive: iconCVActive,
    iconSrcInactive: iconCVInactive,
    title: "Lerne Dich kennen",
    status: "inactive",
  },
  {
    id: 1,
    iconSrcActive: iconCVActive,
    iconSrcInactive: iconCVInactive,
    title: "Lerne Dich kennen",
    status: "active",
  },
  {
    id: 2,
    iconSrcActive: iconCVActive,
    iconSrcInactive: iconCVInactive,
    title: "Lerne Dich kennen",
    status: "done",
  },
];

const HomeScreen = () => {
  const stepsView = listSteps.map((item) => (
    // <p>{item.id}</p>
    <StepButton
      size={200}
      title={item.title}
      iconSrcActive={item.iconSrcActive}
      iconSrcInactive={item.iconSrcInactive}
      buttonType={item.status}
    />
  ));

  //   return <div className={styles.container}>
  //       {stepsView}
  //     </div>;

  // Media Queries
  const phone = useMediaQuery({ query: "(max-width: 767px)" });
  const tablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1024px)",
  });
  const desktop = useMediaQuery({ query: "(min-width: 1025px)" });

  // Returns step button size based on screen size (phone/tablet/desktop)
  function returnStepbuttonSize(): number {
    if (phone) {
      return 30;
    } else if (tablet) {
      return 70;
    } else {
      return 120;
    }
  }

  // Returns style of line element based on whether the previous step button has been completed

  return (
    <div>
      <Grid container>

        {/* Left section */}
        <Grid item xs={3} className={styles.columnLeft}>
          <Paper className={styles.containerButton} elevation={0} square>
            <StepButton
              size={returnStepbuttonSize()}
              title="Lerne dich kennen"
              iconSrcActive={iconCVActive}
              iconSrcInactive={iconCVInactive}
              buttonType="done"
            />
          </Paper>
          <div className={styles.containerLine}>
            <hr
              className={styles.vertLine}
              style={{ borderColor: "white" }}
            ></hr>
          </div>
          <Paper className={styles.containerButton} elevation={0}>
            <StepButton
              size={returnStepbuttonSize()}
              title="Schule | Lehre | Freizeit"
              iconSrcActive={iconCVActive}
              iconSrcInactive={iconCVInactive}
              buttonType="active"
            />
          </Paper>
          <div className={styles.containerLine}>
            <hr className={styles.vertLine}></hr>
          </div>
          <Paper className={styles.containerButton} elevation={0}>
            <StepButton
              size={returnStepbuttonSize()}
              title="Bewerbungsunterlagen"
              iconSrcActive={iconCVActive}
              iconSrcInactive={iconCVInactive}
              buttonType="inactive"
            />
          </Paper>
        </Grid>

        {/* Middle section */}
        <Grid item xs={6}>
          <div>
            <hr
              className={`${styles.containerhorizLine} ${styles.horizLine} ${styles.dashed}`}
            ></hr>
            <hr
              className={`${styles.containerhorizLine} ${styles.horizLine} ${styles.dashed}`}
            ></hr>
            <hr
              className={`${styles.containerhorizLine} ${styles.horizLine}`}
            ></hr>
          </div>
        </Grid>

        {/* Right section */}
        <Grid item xs={3} className={styles.columnRight}>
          <Paper
            className={styles.containerButton}
            id={styles.startButton}
            elevation={0}
          >
            <Link to='Berufsfeld'>
              <StepButton
                size={returnStepbuttonSize()}
                title="Dein Berufsfeld"
                iconSrcActive={iconProfFieldsActive}
                iconSrcInactive={iconProfFieldsInactive}
                buttonType="done"
              />
            </Link>
          </Paper>
          <div className={styles.containerLine}>
            <hr className={`${styles.vertLine} ${styles.dashed}`}></hr>
          </div>
          <Paper className={styles.containerButton} elevation={0}>
            <StepButton
              size={returnStepbuttonSize()}
              title="Dein Ausbildungsplatz"
              iconSrcActive={iconCVActive}
              iconSrcInactive={iconCVInactive}
              buttonType="done"
            />
          </Paper>
          <div className={styles.containerLine}>
            <hr className={`${styles.vertLine} ${styles.dashed}`} style={{borderColor:  "white"}}></hr>
          </div>
          <Paper className={styles.containerButton} elevation={0}>
            <Link to='Aufnahmetest'>
              <StepButton
                size={returnStepbuttonSize()}
                title="Aufnahmetest"
                iconSrcActive={iconTestActive}
                iconSrcInactive={iconTestInactive}
                buttonType="done"
              />
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeScreen;

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
import iconEducationTypeActive from "../../assets/btn_EducationType_active.png";
import iconEducationTypeInactive from "../../assets/btn_EducationType_inactive.png";
import iconInterviewActive from "../../assets/btn_Interview_active.png";
import iconInterviewInactive from "../../assets/btn_Interview_inactive.png";
import iconApplicationActive from "../../assets/btn_Application_active.png";
import iconApplicationInactive from "../../assets/btn_Application_inactive.png";

const listStepsLeft = [
  {
    id: 0,
    iconSrcActive: iconCVActive,
    iconSrcInactive: iconCVInactive,
    title: "Lerne Dich kennen",
    buttonType: "done",
    screenLink: "",
    vlineBottom: "none",
  },
  {
    id: 1,
    iconSrcActive: iconEducationTypeActive,
    iconSrcInactive: iconEducationTypeInactive,
    title: "Lehre oder Schule",
    buttonType: "active",
    screenLink: "LehreOderSchule",
    vlineBottom: "dashed",
  },
  {
    id: 2,
    iconSrcActive: iconCVActive,
    iconSrcInactive: iconCVInactive,
    title: "Lerne Dich kennen",
    buttonType: "inactive",
    screenLink: "",
    vlineBottom: "none",
  },
];

const listStepsRight = [
  {
    id: 0,
    iconSrcActive: iconProfFieldsActive,
    iconSrcInactive: iconProfFieldsInactive,
    title: "Dein Berufsfeld",
    buttonType: "done",
    screenLink: "Berufsfeld",
    vlineBottom: "dashed",
  },
  {
    id: 1,
    iconSrcActive: iconCVActive,
    iconSrcInactive: iconCVInactive,
    title: "Dein Ausbildungsplatz",
    buttonType: "inactive",
    screenLink: "",
    vlineBottom: "none",
  },
  {
    id: 2,
    iconSrcActive: iconTestActive,
    iconSrcInactive: iconTestInactive,
    title: "Aufnahmetest",
    buttonType: "inactive",
    screenLink: "Aufnahmetest",
    vlineBottom: "none",
  },
];

const HomeScreen = () => {

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
          { listStepsLeft.map((item) => (
            <Link to={item.screenLink}>
              <Paper className={styles.containerButton} elevation={0}>
                <StepButton
                  size={returnStepbuttonSize()}
                  title={item.title}
                  iconSrcActive={item.iconSrcActive}
                  iconSrcInactive={item.iconSrcInactive}
                  buttonType={item.buttonType}
                />
              </Paper>
              <div className={styles.containerLine}>
                <hr
                  className={`${styles.vertLine} ${item.vlineBottom === 'dashed' ? styles.dashed : ''}`}
                  style={{ borderColor: item.vlineBottom === 'none' ? 'white' : 'black' }}
                ></hr>
              </div>
            </Link>
          )) }
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
          { listStepsRight.map((item) => (
            <Link to={item.screenLink}>
              <Paper className={styles.containerButton} elevation={0}>
                <StepButton
                  size={returnStepbuttonSize()}
                  title={item.title}
                  iconSrcActive={item.iconSrcActive}
                  iconSrcInactive={item.iconSrcInactive}
                  buttonType={item.buttonType}
                />
              </Paper>
              <div className={styles.containerLine}>
                <hr
                  className={`${styles.vertLine} ${item.vlineBottom === 'dashed' ? styles.dashed : ''}`}
                  style={{ borderColor: item.vlineBottom === 'none' ? 'white' : 'black' }}
                ></hr>
              </div>
            </Link>
          )) }
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeScreen;

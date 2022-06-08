import React from "react";

import iconStartActive from "./btn_Start_active.png";
import iconStartInactive from "./btn_Start_inactive.png";
import iconCVActive from "./btn_CV_active.png";
import iconCVInactive from "./btn_CV_inactive.png";
import iconProfFieldsActive from "./btn_ProfessionalFields_active.png";
import iconProfFieldsInactive from "./btn_ProfessionalFields_inactive.png";
import iconTrialDayActive from "./btn_TrialDay_active.png";
import iconTrialDayInactive from "./btn_TrialDay_inactive.png";
import iconTestActive from "./btn_Test_active.png";
import iconTestInactive from "./btn_Test_inactive.png";
import iconEducationTypeActive from "./btn_EducationType_active.png";
import iconEducationTypeInactive from "./btn_EducationType_inactive.png";

const HomeScreenSteps = [
    {
      id: 9,
      iconSrcActive: iconCVActive,
      iconSrcInactive: iconCVInactive,
      title: "Dein erster Tag",
      buttonType: "inactive",
      screenLink: "",
      vlineBottom: "none",
    },
    {
      id: 8,
      iconSrcActive: iconCVActive,
      iconSrcInactive: iconCVInactive,
      title: "Bewerbungsgespräch",
      buttonType: "inactive",
      screenLink: "",
      vlineBottom: "none",
    },
    {
      id: 7,
      iconSrcActive: iconTestActive,
      iconSrcInactive: iconTestInactive,
      title: "Aufnahmetest",
      buttonType: "inactive",
      screenLink: "Aufnahmetest",
      vlineBottom: "none",
    },
    {
      id: 6,
      iconSrcActive: iconCVActive,
      iconSrcInactive: iconCVInactive,
      title: "Bewerbung",
      buttonType: "inactive",
      screenLink: "",
      vlineBottom: "none",
    },  
    {
      id: 5,
      iconSrcActive: iconTrialDayActive,
      iconSrcInactive: iconTrialDayInactive,
      title: "Schnuppern",
      buttonType: "inactive",
      screenLink: "Schnuppern",
      vlineBottom: "none",
    },
    {
      id: 4,
      iconSrcActive: iconCVActive,
      iconSrcInactive: iconCVInactive,
      title: "Ausbildungsplatz",
      buttonType: "inactive",
      screenLink: "",
      vlineBottom: "none",
    },
    {
      id: 3,
      iconSrcActive: iconEducationTypeActive,
      iconSrcInactive: iconEducationTypeInactive,
      title: "Lehre oder Schule",
      buttonType: "active",
      screenLink: "LehreOderSchule",
      vlineBottom: "dashed",
    },
    {
      id: 2,
      iconSrcActive: iconProfFieldsActive,
      iconSrcInactive: iconProfFieldsInactive,
      title: "Berufe",
      buttonType: "done",
      screenLink: "Berufsfeld",
      vlineBottom: "dashed",
    },
    {
      id: 1,
      iconSrcActive: iconCVActive,
      iconSrcInactive: iconCVInactive,
      title: "Lerne Dich kennen",
      buttonType: "done",
      screenLink: "",
      vlineBottom: "none",
    },
    {
      id: 0,
      iconSrcActive: iconStartActive,
      iconSrcInactive: iconStartInactive,
      title: "Willkommen",
      buttonType: "done",
      screenLink: "",
      vlineBottom: "none",
    },
  ];

  export default HomeScreenSteps;
import React, { useEffect } from "react";
import styles from "./HomeScreen.module.scss";

import HomeScreenSteps from "../../assets/HomeScreenSteps";
import HomeScreenRow from "../../components/HomeScreenRow";

const HomeScreen = () => {

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'auto',
    })
  });

  // Returns style of line element based on whether the previous step button has been completed

  return (
    <div className={styles.container}>
      { HomeScreenSteps.map((item) => (
          <HomeScreenRow
            id={item.id}
            title={item.title}
            iconSrcActive={item.iconSrcActive}
            iconSrcInactive={item.iconSrcInactive}
            buttonType={item.buttonType}
            screenLink={item.screenLink}
          />
        ))
      }
    </div>
  );
};

export default HomeScreen;

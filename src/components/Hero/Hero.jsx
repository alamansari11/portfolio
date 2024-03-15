import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alam</h1>
        <p className={styles.description}>
        Skilled Full Stack Developer with 1.5 years of industry experience, adept at seamlessly integrating frontend and backend technologies to deliver robust and efficient digital solutions
        </p>
        <a href="mailto:alamansari226570.com" className={styles.contactBtn}>
          Let's Connect
        </a>
      </div>
      <img
        src={getImageUrl("profile/profile-pic-4.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} /> */}
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};

import React from "react";
import { IoCallOutline } from "react-icons/io5";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:alamansari226570@gmail.com">alamansari226570@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/alam-ansari-a4b28b220/">linkedin.com/alam-ansari-a4b28b220/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/alamansari11">github.com/alamansari11</a>
        </li>
        <li className={styles.link}>
          {/* <img src={getImageUrl("contact/phone.png")} alt="Phone icon" /> */}
          <IoCallOutline size={40} />
          <a href="tel:+918459226570">+91 8459226570</a>
        </li>
      </ul>
    </footer>
  );
};

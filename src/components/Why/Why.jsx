import React from "react";

import styles from "./Why.module.css";
import { getImageUrl } from "../../utils";

export const Why = () => {
  return (
    <section className={styles.container} id="why">
      <h2 className={styles.title}>Why me?</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("why/person.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("why/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Passion and Drive</h3>
              <p>
              Deeply passionate and Committed to continuous improvement and innovation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("why/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Effective Communication and Collaboration</h3>
              <p>
              Strong collaborator and communicator, Skilled in fostering positive relationships with colleagues and stakeholders.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("why/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Adaptability and Resilience:</h3>
              <p>
              Highly adaptable to fast-paced environments and embrace challenges.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

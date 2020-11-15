import React from "react";
import Cover from "../components/Cover";
import styles from "../styles/Financing/blackPanel.module.css";
export default function financing() {
  return (
    <div>
      <Cover image={"/Finances/Cover.png"} header={"Financing"} />
      <div className={styles.paragraphContainer}>
        <div className={styles.imageContainer}>
          <img src="/Icons/crown.png" className={styles.crown} />
        </div>
        <div className={styles.paragraph}>
          <p>
            The Queen has royal mortgage professionals ready to serve you, who
            will pre-approve you within 24 hours of providing your information,
            confidentially, with no obligation.
          </p>
          <p>
            Before you start looking at properties you must be clear about what
            you can afford. The Toronto Condo Queen will hook you up with a
            professional mortgage broker who is familar with not only banks
            lending rates and requirements but other lending institutions
            including private lenders. This step is critical and urgent. Best to
            go through the process to get pre-approved, so if you find your
            dream condo, you’re ready to put in an offer and have the Toronto
            Condo Queen negotiate a good price for you.
          </p>
        </div>
      </div>
    </div>
  );
}

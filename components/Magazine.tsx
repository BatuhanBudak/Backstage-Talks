import React, { ForwardedRef } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../styles/Magazines.module.css";

interface Props {
  issueNumber: number;
  id: string;
  issuePic: StaticImageData;
  ref: HTMLElement;
}

const Magazine = React.forwardRef<HTMLElement, Props>(
  ({ id, issueNumber, issuePic }: Props, ref) => {
    return (
      <section id={id} ref={ref} className={styles.magazineWrapper}>
        <div className={styles.magazineImageContainer}>
          <Image src={issuePic} alt={`backstage talks ${issueNumber} issue`} />
        </div>
        {issueNumber !== 1 && (
          <>
            <p className={styles.issueNumber}>Issue #{issueNumber}</p>
            <p className={styles.subtitle}>
              <a href="">BUY HERE</a>
            </p>
            <p className={styles.subtitle}>
              or in{" "}
              <a
                className={styles.storeLink}
                href="https://backstagetalks.com/stocklist.php"
              >
                selected stores.
              </a>
            </p>
          </>
        )}
        {issueNumber === 1 && (
          <>
            <p className={styles.issueNumber}>
              Issue #{issueNumber} is sold out.
            </p>
            <p className={styles.subtitle}>
              If you are lucky, you may get the last pieces in{" "}
              <a href="https://backstagetalks.com/stocklist.php">
                selected stores.
              </a>
            </p>
          </>
        )}
      </section>
    );
  }
);

Magazine.displayName = "Magazine";
export default Magazine;

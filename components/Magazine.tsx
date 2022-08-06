import React from 'react';
import Image from "next/image";
import styles from '../styles/Magazines.module.css';

const Magazine = React.forwardRef((props, ref) => {
    return (

        <section id={props.id} ref={ref} className={styles.magazineWrapper}>
            <div className={styles.magazineImageContainer}>
                <Image src={props.issuePic} alt={`backstage talks ${props.issueNumber} issue`} />
            </div>
            {props.issueNumber !== 1 && <>
                <p className={styles.issueNumber}>Issue #{props.issueNumber}</p>
                <p className={styles.subtitle}><a href="">
                    BUY HERE</a></p>
                <p className={styles.subtitle} >or in <a className={styles.storeLink} href="https://backstagetalks.com/stocklist.php">
                    selected stores.</a></p>
            </>}
            {props.issueNumber === 1 && <>
                <p className={styles.issueNumber}>Issue #{props.issueNumber} is sold out.</p>
                <p className={styles.subtitle}>If you are lucky, you may get the last pieces in <a href="https://backstagetalks.com/stocklist.php">selected stores.</a></p>
            </>}

        </section>
    )
})

Magazine.displayName = 'Magazine';
export default Magazine;
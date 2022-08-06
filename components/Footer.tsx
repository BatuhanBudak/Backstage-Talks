import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerFirstCol}>
                <p className={styles.description}>
                    Backstage Talks is a magazine of casual, but in depth dialogues on design and business. Our decisions shape and influence this complex world—to have a chance to make the right ones, we need to talk.
                </p>
                <p className={styles.author}>© 2022 <a href="https://backstagetalks.com/privacy-policy.php">Published by studio Milk</a></p>
                <a className={styles.privacy} href="https://milk.sk">Privacy Policy</a>
            </div>
            <a className={styles.footerSecondCol} href="mailto:info@backstagetalks.com">info@backstagetalks.com
            </a>
        </footer>
    )
}


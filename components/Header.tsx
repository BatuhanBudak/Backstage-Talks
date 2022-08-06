import React from 'react';
import Image from 'next/image';
import logo from '../public/logo.png';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.headerLogo}>
            <Image src={logo} alt='backstage talks logo' />
        </header>
    )
}

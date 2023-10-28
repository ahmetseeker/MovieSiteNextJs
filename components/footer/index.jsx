import React from 'react'
import styles from "./styles.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="ahmetseker.netlify.app" target="_blank">
        Ahmet ŞEKER
      </Link>
    </footer>
  )
}

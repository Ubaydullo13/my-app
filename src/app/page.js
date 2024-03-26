import Image from "next/image";
import styles from "./page.module.css";
import logo from './assets/Logo.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        <ul className={styles.links}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">FAQ's</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <main className={styles.main}>
        <div className={styles.title}>
        Love and kindness are never wasted.
        </div>
        <p className={styles.text}>We help around 1,00,000+ cats and kittens every year thanks in no small part to our network of over 200+ volunteer-run branches.</p>

        <button className={styles.btn}>Join Us</button>
      </main>
    </div>
  );
}

// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav >
      <div >
        <img src="/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div >
        <Link href="/page1">Page 1</Link>
        <Link href="/page2">Page 2</Link>
        <Link href="/page3">Page 3</Link>
        <Link href="/page4">Page 4</Link>
        <Link href="/page5">Page 5</Link>
        <Link href="/page6">Page 6</Link>
      </div>
    </nav>
  );
};

export default Navbar;

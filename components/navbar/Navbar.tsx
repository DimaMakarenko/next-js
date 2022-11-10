import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
]
const Navbar = () => {
  const { pathname, ...other } = useRouter();

  return (
    <div className={styles.navbar}>
      <span className={styles.logo}>
        <Image src='/favicon.ico' alt="logo" width={40} height={40} />
      </span>
      <nav className={styles.links}>
        {navigation.map(({ id, path, title }) =>
          <Link
            href={path}
            key={id}
            className={`${styles.link} ${pathname === path ? styles.activeLink : null}`}>
            <span>
              {title}
            </span>
          </Link>
        )}
      </nav>
    </div>
  )
}


export default Navbar

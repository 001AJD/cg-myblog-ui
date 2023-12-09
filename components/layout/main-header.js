import Link from 'next/link';
import classes from './main-header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/button';
import { signInWithGoogle, signOut } from '../../lib/firebase/auth';
import { getUser } from '@/lib/getUser';
import { Fragment } from 'react';

function MainHeader() {
  const user = getUser();

  function loginHandler() {
    signInWithGoogle();
  }

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.flexLayout}>
      <h1 className={classes.title}>
        <Link href={'/'}>
          <FontAwesomeIcon icon={faCube} />
          &nbsp;MyBlog
        </Link>
      </h1>
      <nav className={classes.navBar}>
        <ul>
          <li>
            <Link href="/blog"> Blogs</Link>
          </li>
          <li>
            <span>
              {user ? (
                <Button onClick={logoutHandler}>Logout</Button>
              ) : (
                <Button onClick={loginHandler}>Login</Button>
              )}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

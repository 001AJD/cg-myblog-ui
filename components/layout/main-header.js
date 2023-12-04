import Link from "next/link";
import classes from "./main-header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/button";
import { signInWithGoogle, signOut } from "../../lib/firebase/auth";
import { getUser } from "@/lib/getUser";

function MainHeader() {
  const user = getUser();

  function loginHandler() {
    signInWithGoogle();
  }

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <nav className={classes.mainNav}>
          <ul>
            <li>
              <Link href="/">
                <span>
                  <FontAwesomeIcon icon={faCube} />
                </span>
                <span> MyBlog</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span>All Blogs</span>
              </Link>
            </li>
          </ul>
          <span className={classes.rightNav}>
            {user ? (
              <Button onClick={logoutHandler}>Logout</Button>
            ) : (
              <Button onClick={loginHandler}>Login</Button>
            )}
          </span>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;

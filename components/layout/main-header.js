import Link from "next/link";
import classes from "./main-header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";

function MainHeader() {
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
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;

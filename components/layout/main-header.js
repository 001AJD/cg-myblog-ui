import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link href="/">MyBlog</Link>
			</div>
		</header>
	);
}

export default MainHeader;

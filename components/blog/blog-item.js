import { useRouter } from "next/router";
import classes from "./blog-item.module.css";
import Link from "next/link";
import Button from "../ui/button";

function BlogItem(props) {
	const router = useRouter();
	const { id, title, author, body } = props.data;

	function exploreHandler() {
		const fullPath = `/blog/${id}`;
		router.push(fullPath);
	}

	return (
		<li className={classes.item}>
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{author}</time>
					</div>
					<div className={classes.address}>
						<address>{body}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={"/blog/" + id}>
						<span>Explore Event</span>
						<span className={classes.icon}></span>
					</Button>
				</div>
			</div>
		</li>
	);
}

export default BlogItem;

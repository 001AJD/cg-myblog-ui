import { Fragment } from "react";
import CommentsList from "./comments-list";

function CommentSection() {
	return (
		<Fragment>
			<CommentsList />
			<textarea rows={3}></textarea>
			<button>Add Comment</button>
		</Fragment>
	);
}

export default CommentSection;

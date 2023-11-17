import { Fragment } from "react";
import CommentsList from "./comments-list";

function AddCommentSection(props) {
	return (
		<Fragment>
			<textarea rows={3}></textarea>
			<button>Add Comment</button>
		</Fragment>
	);
}

export default AddCommentSection;

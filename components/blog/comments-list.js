import { Fragment } from "react";

function CommentsList() {
	const dummyData = [
		{
			userName: "ajinkya",
			comment: "Awesome Blog post",
		},
		{
			userName: "Max",
			comment: "Good read! Food for brain",
		},
	];

	return (
		<Fragment>
			<h3>See what people are saying below</h3>
			<ul>
				{dummyData.map((comment) => (
					<li key={comment.userName}>
						{comment.userName} say's ~ {comment.comment}
					</li>
				))}
			</ul>
		</Fragment>
	);
}

export default CommentsList;

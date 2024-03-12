import React from "react";
import "../App.css";
import UpvoteComponent from "./UpvoteComponent";

const UpvoteApp = () => {
	const [upvote1Focus, setUpvote1Focus] = React.useState(false);
	const [upvote2Focus, setUpvote2Focus] = React.useState(false);
	const [upvote3Focus, setUpvote3Focus] = React.useState(false);
	const handleFocus1 = () => {
		setUpvote1Focus(true);
		setUpvote2Focus(false);
		setUpvote3Focus(false);
	};

	const handleBlur1 = () => {
		setUpvote1Focus(false);
	};

	const handleFocus2 = () => {
		setUpvote2Focus(true);
		setUpvote1Focus(false);
		setUpvote3Focus(false);
	};

	const handleBlur2 = () => {
		setUpvote2Focus(false);
	};

	const handleFocus3 = () => {
		setUpvote3Focus(true);
		setUpvote1Focus(false);
		setUpvote2Focus(false);
	};

	const handleBlur3 = () => {
		setUpvote3Focus(false);
	};
	return (
		<div className="w-1/2 h-1/6 bg-slate-50 py-32 px-8">
			<UpvoteComponent
				id={1}
				handleFocus={() => handleFocus1()}
				isFocus={upvote1Focus}
				handleBlur={() => handleBlur1()}
			/>
			<UpvoteComponent
				id={2}
				handleFocus={() => handleFocus2()}
				isFocus={upvote2Focus}
				handleBlur={() => handleBlur2()}
			/>
			<UpvoteComponent
				id={3}
				handleFocus={() => handleFocus3()}
				isFocus={upvote3Focus}
				handleBlur={() => handleBlur3()}
			/>
		</div>
	);
};

export default UpvoteApp;

import React, { useEffect } from "react";
import "../App.css";
import { ReactComponent as Plus } from "../plus.svg";

type UpvoteComponentProps = {
	id: number;
	handleFocus: () => void;
	isFocus: boolean;
	handleBlur: () => void;
};

const UpvoteComponent = ({
	id,
	handleFocus,
	isFocus,
	handleBlur,
}: UpvoteComponentProps) => {
	const [num, setNum] = React.useState(0);

	const addClick = () => {
		localStorage.setItem(`${id}`, JSON.stringify(num + 1));
		setNum(num + 1);
	};

	const deleteClick = () => {
		if (num > 0) {
			localStorage.setItem(`${id}`, JSON.stringify(num - 1));
			setNum(num - 1);
		}
	};

	useEffect(() => {
		const items = localStorage.getItem(`${id}`);
		if (items) {
			setNum(parseInt(items));
		}
	}, []);
	return (
		<div
			onClick={handleFocus}
			onBlur={handleBlur}
			className="flex flex-row justify-between my-4 cursor-pointer"
		>
			<div
				className={`w-full flex py-5 border-2 rounded-md "border-slate-300" border-solid mx-2`}
			>
				<div className="flex pl-2">
					{[...Array(num)].map((e, i) => {
						return (
							<div
								key={`${e}-${i}`}
								className={`${
									isFocus ? "bg-[#E5E8FD]" : "bg-[#F4F6F8]"
								} mr-2 rounded-md`}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill=""
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.3149 6.29307C11.4939 6.09658 11.7418 5.99834 12.0034 5.99834C12.265 5.99834 12.5128 6.11062 12.6918 6.29307L16.7125 10.3913C16.9053 10.5878 17.0016 10.8404 17.0016 11.0931C17.0016 11.3457 16.9053 11.5983 16.7125 11.7948C16.3407 12.1738 15.7211 12.1738 15.3493 11.7948L12.9672 9.36676V17.0417C12.9672 17.589 12.5404 18.0017 12.0034 18.0017C11.4664 18.0017 11.0395 17.589 11.0395 17.0417V9.36676L8.64364 11.7948C8.27187 12.1738 7.65225 12.1738 7.28048 11.7948C6.9087 11.4159 6.9087 10.7843 7.28048 10.4054L11.3149 6.29307Z"
										fill={isFocus ? "#253CF2" : "#343A40"}
									/>
								</svg>
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex flex-row">
				<button onClick={() => addClick()}>
					<Plus className="bg-[#F4F6F8] rounded-lg mx-2" />
				</button>
				<button onClick={() => deleteClick()}>
					<Plus className="rotate-45 bg-[#F4F6F8] rounded-lg mx-2" />
				</button>
			</div>
		</div>
	);
};

export default UpvoteComponent;

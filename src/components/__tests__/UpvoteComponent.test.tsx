import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UpvoteComponent from "../UpvoteComponent";

const mockedHandleFocus1 = jest.fn();
const mockedHandleBlur1 = jest.fn();
const mockedHandleBlur2 = jest.fn();
const mockedHandleFocus2 = jest.fn();

test("has correct welcome text", () => {
	render(
		<div>
			<UpvoteComponent
				id={1}
				handleBlur={mockedHandleBlur1}
				handleFocus={mockedHandleFocus1}
				isFocus={true}
			/>
			<UpvoteComponent
				id={2}
				handleBlur={mockedHandleBlur2}
				handleFocus={mockedHandleFocus2}
				isFocus={false}
			/>
		</div>
	);
	const buttonFromComponent1 = screen.getAllByRole("button")[0];
	fireEvent.click(buttonFromComponent1);
	expect(mockedHandleFocus1).toHaveBeenCalledTimes(1);
	expect(mockedHandleFocus2).toHaveBeenCalledTimes(0);

	const buttonFromComponent2 = screen.getAllByRole("button")[2];
	fireEvent.click(buttonFromComponent2);
	expect(mockedHandleFocus2).toHaveBeenCalledTimes(1);
	expect(mockedHandleFocus1).toHaveBeenCalledTimes(1);
});

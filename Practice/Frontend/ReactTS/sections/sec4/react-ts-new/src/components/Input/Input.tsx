import {
	forwardRef,
	Ref,
	type ComponentPropsWithoutRef,
	type JSX,
} from "react";

//  forwardRef<ref Type, other props type>
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ id, label, ...props },
	ref: Ref<HTMLInputElement>
): JSX.Element {
	return (
		<form>
			<label htmlFor={id}>{label}</label>
			<input {...props} id={id} ref={ref} />
		</form>
	);
});

export default Input;

type InputProps = {
	id: string;
	label: string;
} & ComponentPropsWithoutRef<"input">;

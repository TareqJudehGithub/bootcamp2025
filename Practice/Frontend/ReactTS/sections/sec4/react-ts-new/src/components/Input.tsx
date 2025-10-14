import type { ComponentPropsWithoutRef, JSX } from "react";

export default function Input({ id, label, ...props }: InputProps) {
	return (
		<form>
			<label htmlFor={id}>{label}</label>
			<input {...props} id={id} />
		</form>
	);
}

type InputProps = {
	id: string;
	label: string;
} & ComponentPropsWithoutRef<"input">;

import type { ComponentPropsWithoutRef, JSX, ReactNode } from "react";

export default function Button({
	children,
	...props
}: ButtonCompProps): JSX.Element {
	if (props.el === "anchor") {
		return (
			<a className="button" {...props}>
				{children}{" "}
			</a>
		);
	}
	return (
		<button className="button" {...props}>
			{children}
		</button>
	);
}

type ButtonProps = {
	el: "button";
	children: ReactNode;
} & ComponentPropsWithoutRef<"button">;
type AnchorProps = {
	el: "anchor";
	children: ReactNode;
} & ComponentPropsWithoutRef<"a">;

type ButtonCompProps = ButtonProps | AnchorProps;

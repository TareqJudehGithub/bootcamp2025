import type { ComponentPropsWithoutRef, JSX } from "react";

export default function ButtonV2(props: ButtonV2Props): JSX.Element {
	// Helper function - type predicates
	function inAnchorProps(props: ButtonV2Props): props is LinkProps {
		return "href" in props;
	}
	if (inAnchorProps(props))
		return (
			<a className="button" {...props}>
				{props.children}
			</a>
		);
	return (
		<button className="button" {...props}>
			{props.children}
		</button>
	);
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
	href?: never;
};

type LinkProps = ComponentPropsWithoutRef<"a"> & { href?: string };

type ButtonV2Props = ButtonProps | LinkProps;

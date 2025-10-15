import type { ElementType, JSX, ReactNode } from "react";

export default function Container({
	as,
	children,
}: ContainerProps): JSX.Element {
	const Component = as;
	return <Component>{children}</Component>;
}

type ContainerProps = {
	as: ElementType;
	children: ReactNode;
};

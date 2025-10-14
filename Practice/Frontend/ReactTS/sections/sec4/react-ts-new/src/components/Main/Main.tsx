import type { JSX, ReactNode } from "react";

export default function Main(props: MainProps): JSX.Element {
	return <main>{props.children}</main>;
}
interface MainProps {
	children: ReactNode;
}

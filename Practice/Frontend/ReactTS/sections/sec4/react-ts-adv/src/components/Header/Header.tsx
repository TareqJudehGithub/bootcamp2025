import type { JSX, ReactNode } from "react";

export default function Header(props: HeaderProps): JSX.Element {
	return (
		<header>
			<img src={props.image.src} alt={props.image.alt} />
			{props.children}
		</header>
	);
}
interface HeaderProps {
	image: {
		src: string;
		alt: string;
	};
	children: ReactNode;
}

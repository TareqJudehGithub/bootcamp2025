import type { ReactNode, JSX } from "react";

export default function InfoBox(props: InfoBoxProps): JSX.Element {
	const { mode, children } = props;

	console.log({ mode });
	if (mode === "hint") {
		return <aside className="infobox infobox-hint ">{children}</aside>;
	}
	console.log({ mode });
	const { severity } = props;
	console.log(severity);
	return (
		<aside className={`infobox infobox-warning warning--${severity}`}>
			<h2>Warning!</h2>
			{children}
		</aside>
	);
}

type WarningBoxProps = {
	mode: "warning";
	severity: "low" | "medium" | "high";
	children: ReactNode;
};
type HintBoxProps = {
	mode: "hint";
	children: ReactNode;
};
// Discriminated Union type
type InfoBoxProps = WarningBoxProps | HintBoxProps;

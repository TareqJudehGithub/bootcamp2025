import type {ComponentPropsWithoutRef, ElementType, JSX, ReactNode } from "react";

export default function Container<U extends ElementType>({
	as,
  children,
  ...props
}: ContainerProps<U>): JSX.Element {
	const Component = as || "div";   // || means Default value
	return <Component className="container" {...props}>{children}</Component>;
}

type ContainerProps<T extends ElementType> = {
	as?: T;
	children: ReactNode; // children
} & ComponentPropsWithoutRef<T>;

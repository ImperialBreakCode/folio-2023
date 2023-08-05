import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

const ContentContainer = ({ children } : ContainerProps) => {

	return <div>{children}</div>;
};

export default ContentContainer;
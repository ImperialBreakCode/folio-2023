import { ReactNode } from "react";

const FlowingHeadingText = ({
	children,
	count,
    className
}: {
	children: ReactNode;
	count: number;
    className?: string;
}) => {

    const flowHtml = (n: number) : ReactNode[] => {

        let output : ReactNode[] = [];

        for (let i = 0; i < n; i++) {
            output.push(<span>{children}</span>);
        }

        return output;
    }

	return (
		<h1 className={`${className} text-[8rem] mt-[7vh] lg:text-[7rem] whitespace-nowrap`}>
			{flowHtml(count)}
		</h1>
	);
};

export default FlowingHeadingText;

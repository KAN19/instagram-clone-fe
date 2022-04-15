import { FixMeLater } from "interfaces/Common.interface";
import React, { RefAttributes } from "react";
import { IconType } from "react-icons/lib";
import { Link } from "react-router-dom";

type Props = {
	icon: IconType;
	iconActive?: IconType;
	link?: string;
	style?: React.CSSProperties | undefined;
	onClick?: FixMeLater;
};

export default function IconComponent({
	icon: Icon,
	iconActive: IconActive,
	link,
	style,
	onClick,
}: Props) {
	const defaultStyle = { fontSize: "26px" };

	// const handleOnClick = () => {
	// 	if (onClick) {
	// 		onClick();
	// 	}
	// };

	return (
		// <Link to={`${link ? link : "#"}`}>
		<div>
			<Icon
				style={style ? { ...defaultStyle, ...style } : defaultStyle}
			/>
		</div>
		// </Link>
	);
}

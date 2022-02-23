import { FixMeLater } from "interfaces/Common.interface";
import React from "react";
import { Link } from "react-router-dom";

export default function CircleImage(
	props:
		| React.DetailedHTMLProps<
				React.ImgHTMLAttributes<HTMLImageElement>,
				HTMLImageElement
		  >
		| FixMeLater
) {
	return (
		<img
			src={props?.src}
			alt={props?.alt}
			className={`rounded-full object-cover overflow-hidden max-w-[26px] h-[26px] ${
				props?.className
			} ${props.link ? `cursor-pointer` : ``}`}
		/>
	);
}

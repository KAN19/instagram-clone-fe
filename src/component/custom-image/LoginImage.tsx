import { FixMeLater } from "interfaces/Common.interface";
import React, { useEffect, useState } from "react";

export default function LoginImage(
	props:
		| React.DetailedHTMLProps<
				React.ImgHTMLAttributes<HTMLImageElement>,
				HTMLImageElement
		  >
		| FixMeLater
) {
	const [shouldRender, setRender] = useState(props?.show);

	const onAnimationEnd = () => {
		if (!props?.show) setRender(false);
	};

	// console.log(props?.show);

	useEffect(() => {
		if (props?.show) setRender(true);
	}, [props?.show]);

	return (
		<>
			{shouldRender && (
				<img
					src={props?.src}
					alt={props?.alt}
					className={props?.className}
					style={{
						animation: `${props?.show ? "fadeIn" : "fadeOut"} 1s`,
					}}
					onAnimationEnd={onAnimationEnd}
				/>
			)}
		</>
	);
}

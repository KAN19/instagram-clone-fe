import React from "react";
import TestImage from "assets/test-image.jpg";

type Props = {};

export default function StoryCard({}: Props) {
	return (
		<div className="flex flex-col justify-center items-center cursor-pointer basis-[66px]">
			<div className="flex justify-center items-center rounded-full bg-gradient-to-tr from-yellow-300 to-red-500 w-[66px] h-[66px]">
				<div className="flex justify-center items-center rounded-full bg-white w-[60px] h-[60px]">
					<img
						src={TestImage}
						alt=""
						className="w-[56px] h-[56px] object-cover rounded-full"
					/>
				</div>
			</div>

			<div className="mt-1 text-xs">Ngan hue</div>
		</div>
	);
}

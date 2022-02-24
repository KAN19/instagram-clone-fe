import React from "react";
import StoryCard from "./StoryCard";

type Props = {};

export default function StorySection({}: Props) {
	return (
		<div className=" w-full">
			{/* Story */}
			<div className="h-[120px] w-full relative bg-white-custom flex border-b border-border-custom overflow-hidden space-x-4 px-4 shadow-sm md:mt-10 md:border">
				<StoryCard />
				<StoryCard />
				<StoryCard />
				<StoryCard />
				<StoryCard />

				<div className="absolute right-0 top-[50%] translate-x-[0] translate-y-[-50%] text-center">
					arrow
				</div>
			</div>
		</div>
	);
}

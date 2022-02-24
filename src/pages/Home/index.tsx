import Header from "component/header/Header";
import StoryCard from "component/story-card/StoryCard";
import StorySection from "component/story-card/StorySection";
import React from "react";

type Props = {};

export default function HomePage({}: Props) {
	return (
		<div className="md:w-[75%] flex mx-auto">
			<div className="flex flex-col flex-grow-[2]">
				<StorySection />

				<div>News feed</div>
			</div>

			{/* Suggestion */}
			<div className="flex-grow-[1] hidden md:flex">suggets</div>
		</div>
	);
}

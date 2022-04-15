import FeedCard from "component/feed-card";
import Header from "component/header/Header";
import StoryCard from "component/story-card/StoryCard";
import StorySection from "component/story-card/StorySection";
import React from "react";

type Props = {};

export default function HomePage({}: Props) {
	return (
		<div className="md:w-[75%] flex mx-auto">
			<div className="flex flex-col flex-[0.65]">
				<StorySection />

				<FeedCard />
			</div>

			{/* Suggestion */}
			<div className="flex-[0.35] hidden md:flex">suggets</div>
		</div>
	);
}

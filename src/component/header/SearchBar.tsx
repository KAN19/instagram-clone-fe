import React from "react";

type Props = {};

export default function SearchBar({}: Props) {
	return (
		<div className="w-full flex justify-center ">
			<input
				className="bg-[#efefef] w-[268px] h-[36px] text-[#8e8e8e] rounded-md p-2"
				type="text"
			/>
		</div>
	);
}

import { FixMeLater } from "interfaces/Common.interface";
import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdCancel } from "react-icons/md";

type Props = {};

export default function SearchBar({}: Props) {
	const [isSearching, setIsSearching] = useState<boolean>(false);
	const [isCancelable, setIsCancelable] = useState(false);
	const [value, setValue] = useState<string>("");

	const handleInputChange = (e: FixMeLater) => {
		setValue(e.target.value);
	};

	const handleInputFocus = () => {
		setIsSearching(true);
		setIsCancelable(true);
	};

	const handleInputBlur = (e: FixMeLater) => {
		setIsSearching(false);
		console.log("blur ne");
		// console.log(e);
	};

	const handleCancelSearch = () => {
		console.log("cancel");
		setIsCancelable(false);
		setValue("");
		// handleInputBlur();
	};

	return (
		<div
			className="flex justify-center bg-[#efefef] h-[36px] text-[#8e8e8e] px-3 space-x-3 rounded-md min-w-[268px]"
			// onClick={handleInputFocus}
			onFocus={handleInputFocus}
			onBlur={handleInputBlur}
		>
			<div className="flex justify-center items-center">
				{!isSearching && <BsSearch />}
			</div>
			<input
				className="bg-[#efefef] focus:outline-none text-sm w-full"
				// onClick={handleInputFocus}
				// onBlur={handleInputBlur}
				value={value}
				onChange={handleInputChange}
				type="text"
			/>
			<div
				className="flex justify-center items-center cursor-pointer"
				onClick={handleCancelSearch}
			>
				{isSearching && <MdCancel />}
			</div>
		</div>
	);
}

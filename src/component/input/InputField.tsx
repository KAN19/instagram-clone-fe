import { FixMeLater } from "interfaces/Common.interface";
import React from "react";

export default function InputField(
	props: React.InputHTMLAttributes<HTMLInputElement>
) {
	return (
		<>
			<input
				className={`w-full p-2 h-8 border-border-custom border outline-none focus:border-gray-400 bg-background-custom text-sm rounded-sm ${props.className}`}
				type="text"
				name=""
				id=""
				placeholder={props.placeholder}
			/>
		</>
	);
}

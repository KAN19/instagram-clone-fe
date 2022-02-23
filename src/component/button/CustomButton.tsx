import { FixMeLater } from "interfaces/Common.interface";
import React from "react";

type Props = {};

export function PrimaryButton(
	props: React.HTMLAttributes<HTMLButtonElement> | FixMeLater
) {
	return (
		<>
			<button
				className={`bg-button-disable w-full px-4 py-1 text-white-custom ${props.className}`}
			>
				{props.children}
			</button>
		</>
	);
}

import React from "react";
import Logo from "assets/instagram-wordmark.svg";
import "./Header.scss";
import SearchBar from "./SearchBar";
import IconComponent from "component/iconComponent/IconComponent";
import {
	AiOutlineCompass,
	AiOutlineHeart,
	AiOutlineHome,
	AiOutlinePlusSquare,
} from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import CircleImage from "component/custom-image/CircleImage";
import testIamge from "assets/login-image-3.jpg";

type Props = {};

export default function Header({}: Props) {
	return (
		<div className="header-wrapper">
			<div className="header">
				{/* Logo */}
				<div className="header__left">
					<img className="" src={Logo} alt="word mark" width={103} />
				</div>
				{/* Search bar */}
				<div className="header__middle">
					<SearchBar />
				</div>

				{/* Button list */}
				<div className="header__right">
					<IconComponent icon={AiOutlineHome} />
					<IconComponent icon={RiMessengerLine} />
					<IconComponent icon={AiOutlinePlusSquare} />
					<IconComponent icon={AiOutlineCompass} />
					<IconComponent icon={AiOutlineHeart} />
					<CircleImage src={testIamge} />
				</div>
			</div>
		</div>
	);
}

import InputField from "component/input/InputField";
import { PrimaryButton } from "component/button/CustomButton";
import React, { useEffect, useRef, useState } from "react";
import "./LoginPage.scss";
import InsIconSvg from "assets/instagram-wordmark.svg";
import { Link } from "react-router-dom";
import GoogleStore from "assets/google-play.png";
import AppleStore from "assets/ios-store.png";
import Image1 from "assets/login-image-1.jpg";
import Image2 from "assets/login-image-2.jpg";
import Image3 from "assets/login-image-3.jpg";
import { FixMeLater } from "interfaces/Common.interface";
import LoginImage from "component/custom-image/LoginImage";

type Props = {};

export default function LoginPage({}: Props) {
	const imageSlider = useRef(1);

	const [currentImage, setCurrentImage] = useState<FixMeLater>([
		true,
		false,
		false,
	]);

	const handlePhoneImageChange = () => {
		switch (imageSlider.current) {
			case 1:
				setCurrentImage([true, false, false]);
				break;
			case 2:
				setCurrentImage([false, true, false]);
				break;
			case 3:
				setCurrentImage([false, false, true]);
				break;

			default:
				setCurrentImage([true, false, false]);
				break;
		}
		imageSlider.current++;

		if (imageSlider.current > 3) {
			imageSlider.current = 1;
		}
	};

	useEffect(() => {
		const myInterval = window.setInterval(handlePhoneImageChange, 3000);
		return () => {
			clearInterval(myInterval);
		};
	}, []);

	return (
		<div className="login ">
			<div className="login__leftSide">
				<div className="login__leftSide__phoneFrame">
					<div className="login__leftSide__phoneFrame-topPosition">
						<LoginImage
							src={Image1}
							alt="1"
							className="login__leftSide__phoneFrame-image"
							show={currentImage[0]}
						/>

						<LoginImage
							src={Image2}
							alt="1"
							className="login__leftSide__phoneFrame-image"
							show={currentImage[1]}
						/>

						<LoginImage
							src={Image3}
							alt="1"
							className="login__leftSide__phoneFrame-image"
							show={currentImage[2]}
						/>
					</div>
				</div>
			</div>

			<div className="login__rightSide">
				<div className="login__rightSide__enterSection mb-4">
					<img
						src={InsIconSvg}
						alt=""
						width="200px"
						className="mb-10"
					/>

					<div className="w-full mb-3">
						<InputField className={"mb-2"} placeholder="Name" />
						<InputField className={"mb-2"} placeholder="Password" />
					</div>

					<PrimaryButton className="mb-3">Log In</PrimaryButton>

					<div className="w-full flex justify-center items-center mb-2">
						<hr className="bg-gray-200 flex-1 mx-4" />
						<span className="text-gray-300 text-sm">OR</span>
						<hr className=" bg-gray-200 inline-block flex-1  mx-4" />
					</div>
					<div className="mb-2">
						<span>icon</span>
						<Link to={"/"}>Login with facebook</Link>
					</div>
					<div className="text-xs">
						<Link to={"/"}>Forgot password?</Link>
					</div>
				</div>

				<div className="login__rightSide__signUpSection mb-4">
					<span>Dont have account</span>
					<span>
						<Link to={"/"}>Sign up</Link>
					</span>
				</div>

				<div className="login__rightSide__getTheAppSection">
					<div className="mb-3">Get the app</div>

					<div className="flex login__rightSide__getTheAppSection__images">
						<div>
							<img
								src={GoogleStore}
								alt=""
								className="h-10 object-contain"
							/>
						</div>
						<div>
							<img
								src={AppleStore}
								alt=""
								className="h-10 object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

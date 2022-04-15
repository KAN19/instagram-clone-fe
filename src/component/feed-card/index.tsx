import testIamge from "assets/login-image-3.jpg";
import IconComponent from "component/iconComponent/IconComponent";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import {
	BsArrowLeftCircle,
	BsArrowRightCircle,
	BsBookmark,
	BsEmojiSmile,
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

type Props = {};

export default function FeedCard({}: Props) {
	return (
		<article className="bg-white border-border-custom border">
			<div className="flex justify-between h-[70px] border-b border-border-custom p-4">
				<div className="flex space-x-3 items-center text-xs">
					<img
						src={testIamge}
						alt=""
						className="w-8 h-8 object-cover rounded-full shadow-sm"
					/>
					<div className="space-y-1">
						<div className="font-semibold">Tennnn</div>
						<div className="text-gray-400">Dia diem neu co</div>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<HiOutlineDotsHorizontal style={{ fontSize: "24px" }} />
				</div>
			</div>

			<div className="flex justify-center items-center w-full  relative">
				<div className="absolute left-0">
					<IconComponent icon={BsFillArrowLeftCircleFill} />
				</div>

				<img
					src={testIamge}
					alt=""
					className="w-[614px] max-h-[768px] object-contain"
				/>
				<div className="absolute right-0">
					<IconComponent icon={BsFillArrowRightCircleFill} />
				</div>
			</div>

			<div className="flex justify-between px-4 py-3">
				<div className="flex space-x-4">
					<IconComponent icon={AiOutlineHeart} />
					<IconComponent
						icon={IoChatbubbleOutline}
						style={{ transform: "scaleX(-1)", fontSize: "24px" }}
					/>
					<IconComponent
						icon={FiSend}
						style={{ fontSize: "24px", transform: "rotate(10deg)" }}
					/>
				</div>
				<div>
					{" "}
					<IconComponent
						icon={BsBookmark}
						style={{ fontSize: "24px" }}
					/>
				</div>
			</div>
			<div className="text-sm px-4">
				{/* <div className="font-semibold">1999 likes</div> */}
				<div className="flex  items-center space-x-2  py-2 bg-gray-200">
					<div className="relative flex -space-x-3">
						<div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
							<img
								src={testIamge}
								alt=""
								className="w-6 h-6 object-cover rounded-full "
							/>
						</div>
						<div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
							<img
								src={testIamge}
								alt=""
								className="w-6 h-6 object-cover rounded-full "
							/>
						</div>
						<div className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
							<img
								src={testIamge}
								alt=""
								className="w-6 h-6 object-cover rounded-full "
							/>
						</div>
					</div>

					<div>
						Liked by <span>abc</span> and <span>....</span>
					</div>
				</div>
				<div className="font-semibold">Nguyen kiet</div>
				<div>Content</div>
				<div className="text-gray-400 cursor-pointer">
					View all comment
				</div>
			</div>
			<div className="min-h-[53px] px-4  space-x-2 flex items-center border-t border-border-custom text-sm">
				<div className="flex items-center ">
					<IconComponent
						icon={BsEmojiSmile}
						style={{ fontSize: "24px" }}
					/>
				</div>
				<input
					className="focus:outline-none flex-grow break-words"
					type="text"
					name=""
					id=""
					placeholder="Add a comment..."
				/>
				<button className="text-blue-600 font-semibold">Post</button>
			</div>
		</article>
	);
}

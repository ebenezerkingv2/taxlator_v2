// =====================================
// src/components/dashboard/dashComponents/ProfileImageUploader.tsx
// ===================================== PROFILE IMAGE UPLOADER

import { useState } from "react";
import { useUser } from "../../../context/useUser";

import { IoCameraSharp } from "react-icons/io5";

// ===================================== DATA
type ProfileImageUploaderProps = {
	className?: string;
};

// ===================================== FUNCTION
export default function ProfileImageUploader({
	className = "",
}: ProfileImageUploaderProps) {
	const { user, setUser } = useUser();
	const [loading, setLoading] = useState(false);

	const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		setLoading(true);

		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "taxlator_profile");

		try {
			const res = await fetch(
				"https://api.cloudinary.com/v1_1/dfupktkqb/image/upload",
				{
					method: "POST",
					body: formData,
				},
			);

			const data = await res.json();
			const imageUrl = data.secure_url;

			// ======================== API HERE
			await setUser({ image: imageUrl });
		} catch (err) {
			console.error("Upload failed", err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={`relative w-40 h-40 md:w-45 md:h-45 ${className}`}>
			{/* ================= PROFILE IMAGE */}
			<img
				src={
					user.image ||
					"https://res.cloudinary.com/dfupktkqb/image/upload/f_auto,q_auto/kingv2_q42hnf"
				}
				alt="Profile"
				className="w-full h-full object-cover border-4 border-[#01bdfc] rounded-full"
			/>

			{/* ================= HIDDEN INPUT */}
			<input
				type="file"
				accept="image/*"
				onChange={handleImageUpload}
				className="hidden"
				id="profileUpload"
			/>

			{/* ================= CAMERA ICON */}
			<label
				htmlFor="profileUpload"
				className="absolute bottom-0 right-0 bg-[#01bdfc]/10 rounded cursor-pointer 
			text-[#01bdfc]/80 hover:text-[#01bdfc] hover:bg-black/10 transition"
			>
				{loading ? (
					<span className="text-[10px]">...</span>
				) : (
					<IoCameraSharp size={40} />
				)}
			</label>
		</div>
	);
}

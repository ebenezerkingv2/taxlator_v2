// =====================================
// src/components/dashboard/dashComponents/ProfileImageUploader.tsx
// =====================================

// =====================================
// src/dashboard/dashComponents/ProfileImageUploader.tsx
// =====================================

import { useState } from "react";
import { useUser } from "../../../context/useUser";

export default function ProfileImageUploader() {
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
		<div className="flex items-center gap-4">
			<img
				src={
					user.image ||
					"https://res.cloudinary.com/dfupktkqb/image/upload/f_auto,q_auto/kingv2_q42hnf"
				}
				alt="Profile"
				className="w-20 h-20 md:w-30 md:h-30 object-cover border-4 border-[#01bdfc] rounded-full"
			/>

			<label className="relative group cursor-pointer px-3 py-2 bg-black/30 text-[#01bdfc] rounded-lg text-sm hover:bg-black">
				{loading ? "Uploading..." : "Change Photo"}
				<input
					type="file"
					accept="image/*"
					onChange={handleImageUpload}
					className="hidden"
				/>

				<span className="absolute left-0 top-0 w-0 h-[2px] bg-[#f4ab17] transition-all duration-400 group-hover:w-full" />
				<span className="absolute right-0 bottom-0 w-0 h-[2px] bg-[#01bdfc] transition-all duration-400 group-hover:w-full" />
			</label>
		</div>
	);
}

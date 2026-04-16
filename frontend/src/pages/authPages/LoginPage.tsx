// =====================================
// src/pages/authPages/LoginPage.tsx
// ===================================== LOGIN PAGE COMPONENT

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GeneralButton from "../../components/ui/buttons/GeneralButton";
import LegalAuthFrame from "../../components/ui/frames/LegalAuthFrame";
import InputField from "../../components/ui/inputs/InputField";

// ===================================== PAGE
export default function LoginPage() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// 🚀 Frontend only
		console.log({ email, password });

		navigate("/dashboard"); // simulate login
	};

	return (
		<div id="loginPage" className="bg-black py-16 overflow-hidden w-full">
			{/* ================= CONTENT WRAPPER ================= */}
			<div className="loginPage-parent w-full max-w-7xl mx-auto px-4">
				{/* ================= HEADER ================= */}
				<div className="text-center mb-6">
					<h1 className="text-2xl font-bold text-[#f4ab17] mt-2">
						Hey.. Welcome back!
					</h1>

					<p className="text-xs text-[#dbcfff]/90 mt-1">
						Sign in to your Account
					</p>
				</div>

				{/* ================= FRAME + FORM ================= */}
				<LegalAuthFrame className="w-full max-w-2xl mx-auto rounded-2xl bg-gradient-to-b from-black via-[#000aff] to-black p-6">
					<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
						{/* ===================== EMAIL */}
						<div>
							<InputField
								label="Email"
								type="email"
								value={email}
								autoComplete="email"
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
							/>
						</div>

						{/* ===================== PASSWORD */}
						<div>
							<InputField
								label="Password"
								type="password"
								value={password}
								autoComplete="current-password"
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Enter your password"
							/>
						</div>

						{/* ================= REMEMBER ME + FORGOT PASSWORD ================= */}
						<div className="flex items-center justify-between text-xs text-[#dbcfff]/90 leading-relaxed px-1">
							<label className="flex items-center gap-2">
								<input
									type="checkbox"
									checked={rememberMe}
									onChange={(e) => setRememberMe(e.target.checked)}
									className="appearance-none w-4 h-4 border border-[#01bdfc]/50 rounded-full checked:bg-[#f4ab17] cursor-pointer"
								/>
								<span>Remember me</span>
							</label>

							<Link to="/forgot-password" className="cursor-pointer">
								Forgot password?
							</Link>
						</div>

						{/* ===================== BUTTON */}
						<GeneralButton className="mt-4">Sign In</GeneralButton>

						{/* ===================== LINKS */}
						<div className="text-center text-xs text-[#dbcfff]/80 mt-3">
							Don’t have an account?{" "}
							<Link
								to="/signUp-page"
								className="text-[#01bdfc] hover:text-[#f4ab17] font-bold"
							>
								Sign up
							</Link>
						</div>
					</form>
				</LegalAuthFrame>
			</div>
		</div>
	);
}

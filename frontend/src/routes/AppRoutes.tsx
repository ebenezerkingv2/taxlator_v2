// ===============================
// src/routes/AppRoutes.tsx
// =============================== APP ROUTES COMPONENT

import { Routes, Route } from "react-router-dom";

// =============================== LAYOUT
import Shell from "../components/layout/Shell";
import LandingPageLayout from "../pages/landingPage/LandingPageLayout";

// =============================== PAGES
import PayePit from "../pages/taxPages/PayePit";
import Freelancer from "../pages/taxPages/Freelancer";
import CIT from "../pages/taxPages/CIT";
import VAT from "../pages/taxPages/VAT";

// =============================== LEGAL
import PrivacyPolicy from "../pages/otherPages/Privacy_Policy";
import TermsConditions from "../pages/otherPages/Terms_Conditions";
import AboutUs from "../pages/otherPages/AboutUs";
import TaxGuide from "../pages/otherPages/TaxGuide";

// =============================== AUTH
import LoginPage from "../pages/authPages/LoginPage";
import SignUpPage from "../pages/authPages/SignUpPage";

// =============================== DASHBOARD
import Dashboard from "../components/dashboard/pages/Dashboard";
import DashboardLayout from "../components/dashboard/DashboardLayout";

// =============================== FUNCTION
export default function AppRoutes() {
	return (
		<Routes>
			{/* ================= PUBLIC SECTION (WITH SHELL) */}
			<Route element={<Shell />}>
				<Route path="/" element={<LandingPageLayout />} />

				{/* ================= TAX PAGES */}
				<Route path="/tax/payePit" element={<PayePit />} />
				<Route path="/tax/freelancer" element={<Freelancer />} />
				<Route path="/tax/cit" element={<CIT />} />
				<Route path="/tax/vat" element={<VAT />} />

				{/* ================= LEGAL */}
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-conditions" element={<TermsConditions />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/tax-guide" element={<TaxGuide />} />

				{/* ================= AUTH */}
				<Route path="/login-page" element={<LoginPage />} />
				<Route path="/signUp-page" element={<SignUpPage />} />
			</Route>

			{/* ================= PRIVATE SECTION (DASHBOARD) */}
			<Route element={<DashboardLayout />}>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route
					path="/dashboard/calculations"
					element={<div>Calculations</div>}
				/>
				<Route path="/dashboard/profile" element={<div>Profile</div>} />
			</Route>
		</Routes>
	);
}

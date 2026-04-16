// ===============================
// src/routes/AppRoutes.tsx
// =============================== APP ROUTES COMPONENT

import { Routes, Route } from "react-router-dom";
import LandingPageLayout from "../pages/landingPage/LandingPageLayout";
import PayePit from "../pages/taxPages/PayePit";
import Freelancer from "../pages/taxPages/Freelancer";
import CIT from "../pages/taxPages/CIT";
import VAT from "../pages/taxPages/VAT";
import PrivacyPolicy from "../pages/otherPages/Privacy_Policy";
import TermsConditions from "../pages/otherPages/Terms_Conditions";
import AboutUs from "../pages/otherPages/AboutUs";
import TaxGuide from "../pages/otherPages/TaxGuide";
import LoginPage from "../pages/authPages/LoginPage";
import SignUpPage from "../pages/authPages/SignUpPage";

// =============================== FUNCTION
export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<LandingPageLayout />} />

			{/* TAX ROUTES */}
			<Route path="/tax/payePit" element={<PayePit />} />
			<Route path="/tax/freelancer" element={<Freelancer />} />
			<Route path="/tax/cit" element={<CIT />} />
			<Route path="/tax/vat" element={<VAT />} />

			{/* AUTH ROUTES */}
			<Route path="/login-page" element={<LoginPage />} />
			<Route path="/signUp-page" element={<SignUpPage />} />

			{/* LEGAL PAGES */}
			<Route path="/privacy-policy" element={<PrivacyPolicy />} />
			<Route path="/terms-conditions" element={<TermsConditions />} />
			<Route path="/about-us" element={<AboutUs />} />
			<Route path="/tax-guide" element={<TaxGuide />} />
		</Routes>
	);
}

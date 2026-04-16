// ===============================
// src/App.tsx
// =============================== APP.TSX

import "./index.css";
import Shell from "./components/layout/Shell";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./utils/ScrollToTop";

// ===================================== FUNCTION
export default function App() {
	return (
		<Shell>
			<ScrollToTop />
			<AppRoutes />
		</Shell>
	);
}

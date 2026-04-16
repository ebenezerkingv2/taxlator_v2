// =====================================
// src/config/navLinks.ts
// ===================================== NAV LINKS DATA COMPONENT

// ===================================== DATA FUNCTION
export type NavLinkItem =
	| {
			type: "link";
			name: string;
			path: string;
	  }
	| {
			type: "tax-options";
	  };

export const navLinks: NavLinkItem[] = [
	{ type: "link", name: "Home", path: "/" },

	{ type: "tax-options" },

	{ type: "link", name: "TaxGuide", path: "/tax-guide" },
	{ type: "link", name: "Login", path: "/login-page" },
];

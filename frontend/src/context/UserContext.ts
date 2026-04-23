// =====================================
// src/context/UserContext.ts
// ===================================== USER CONTEXT

import { createContext } from "react";

// ===================================== DATA
export type User = {
	image?: string;
	name: string;
	email: string;
	memberSince: string;
};

// ===================================== DATA

export type UserContextType = {
	user: User;

	// ======================API HERE
	setUser: (data: Partial<User>) => Promise<void>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

// ===================================== DATA
export default UserContext;

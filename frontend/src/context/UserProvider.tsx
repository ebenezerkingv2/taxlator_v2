// =====================================
// src/context/UserProvider.tsx
// ===================================== USER PROVIDER

import { useState, useEffect } from "react";
import UserContext from "./UserContext";
import type { ReactNode } from "react";
import type { User } from "./UserContext";
import { getUser, updateUser } from "../components/dashboard/dashApi/userApi";

// ===================================== FUNCTION
export function UserProvider({ children }: { children: ReactNode }) {
	const [user, setUserState] = useState<User>({
		name: "",
		email: "",
		memberSince: "",
		image: "",
	});

	// ================= LOAD USER
	useEffect(() => {
		const loadUser = async () => {
			const data = await getUser();
			setUserState(data);
		};

		loadUser();
	}, []);

	// ================= API SETTER
	const setUser = async (data: Partial<User>) => {
		const updated = await updateUser(data);
		setUserState(updated);
	};

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

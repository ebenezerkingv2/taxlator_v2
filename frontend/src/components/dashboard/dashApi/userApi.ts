// =====================================
// src/components/dashboard/dashApi/userApi.ts
// ===================================== USER API CONNECTION (API ONLY)

import type { User } from "../../../context/UserContext";

const API_URL = "/api/user";

// ===================================== GET USER
export async function getUser(): Promise<User> {
	const res = await fetch(API_URL);

	if (!res.ok) {
		throw new Error("Failed to fetch user");
	}

	return await res.json();
}

// ===================================== UPDATE USER
export async function updateUser(data: Partial<User>): Promise<User> {
	const res = await fetch(API_URL, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (!res.ok) {
		throw new Error("Failed to update user");
	}

	return await res.json();
}

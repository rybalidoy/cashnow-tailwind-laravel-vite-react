import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialAuthState = {
	authenticated: false,
	role: '',
	email: '',
}

const useAuthStore = create(
	persist(
		(set, get) => ({
			...initialAuthState,
			authenticate: (data) => {
				return set((state) => ({
					...state,
					email: data?.email,
					role: data?.role,
					authenticated: true,
				}));
			},
		}),
		{
			name: "authStorage", // Specify a name for the persisted state
		}
	)
);

export default useAuthStore;
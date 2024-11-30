import PocketBase from 'pocketbase';

export const PB = new PocketBase(
	import.meta.env.SSR ? import.meta.env.VITE_API_SERVER : import.meta.env.VITE_API_CLIENT
);

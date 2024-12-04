import PocketBase from 'pocketbase';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase(import.meta.env.VITE_API_SERVER);

	return await resolve(event);
}

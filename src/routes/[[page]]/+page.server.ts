import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	let result;

	try {
		result = await locals.pb
			.collection('home_posts')
			.getList(params.page ? parseInt(params.page) : 1, 5);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_) {
		error(500, "Couldn't load posts.");
	}

	if (result.totalPages < result.page) {
		error(404, "Page doesn't exist.");
	}

	return result;
};

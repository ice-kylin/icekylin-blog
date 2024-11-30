import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PB } from '../../pb';

export const load: PageLoad = async ({ params }) => {
	let result;

	try {
		result = await PB.collection('home_posts').getList(params.page ? parseInt(params.page) : 1, 5);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_) {
		error(500, "Couldn't load posts.");
	}

	if (result.totalPages < result.page) {
		error(404, "Page doesn't exist.");
	}

	return result;
};

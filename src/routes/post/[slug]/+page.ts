import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { PB } from '../../../pb';

export const load: PageLoad = async ({ params }) => {
	let result;

	try {
		result = await PB.collection('post_posts').getFirstListItem(`slug="${params.slug}"`, {
			expand: 'tags',
			fields: 'content,created,header,collectionId,id,title,words,expand.tags.tag'
		});
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_) {
		error(500, "Couldn't load posts.");
	}

	return result;
};

import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { MARKED } from '../../../marked';

export const load: PageServerLoad = async ({ params, locals }) => {
	let result;

	try {
		result = await locals.pb.collection('post_posts').getFirstListItem(`slug="${params.slug}"`, {
			expand: 'tags',
			fields: 'content,created,header,collectionId,id,title,words,expand.tags.tag,expand.tags.slug'
		});
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_) {
		error(500, "Couldn't load posts.");
	}

	result.content = await MARKED.parse(result.content);

	return result;
};

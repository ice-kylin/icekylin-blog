import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { MARKED } from '../../../marked';
import readingTime from 'reading-time';

export const load: PageServerLoad = async ({ params, locals }) => {
	let result;

	try {
		result = await locals.pb.collection('post_posts').getFirstListItem(`slug="${params.slug}"`, {
			expand: 'tags',
			fields:
				'content,created,updated,header,collectionId,id,title,description,category,expand.tags.tag,expand.tags.slug'
		});
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_) {
		error(500, "Couldn't load posts.");
	}

	const readTimeResults = readingTime(result.content);
	result.words = readTimeResults.words;
	result.readTime = readTimeResults.text;
	result.content = await MARKED.parse(result.content);

	return result;
};

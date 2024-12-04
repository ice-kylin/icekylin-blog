import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	let siteStartDays;

	try {
		siteStartDays = Math.ceil(
			(new Date().getTime() -
				new Date(
					(await locals.pb.collection('configs').getFirstListItem('setting_key="site_start_date"'))[
						'setting_value'
					]
				).getTime()) /
				86400000
		);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	} catch (_) {
		error(500, "Couldn't load configs.");
	}

	return {
		siteStartDays
	};
};

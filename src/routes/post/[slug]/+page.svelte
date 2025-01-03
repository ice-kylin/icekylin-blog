<script lang="ts">
	import '../../../alert.css';
	import '../../../katex.min.css';
	import '../../../footnote.css';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { isAtTopState } from '$lib/state.svelte';
	import { AUTHOR } from '../../../config';
	import { post } from './post.svelte';
	import { page } from '$app/state';
	import Title from './title.svelte';

	let { data }: { data: PageData } = $props();

	post.data = {
		category: data.category,
		categorySlug: data.category,
		collectionId: data.collectionId,
		created: data.created,
		description: data.description,
		headTitle: `${data.title} – ${AUTHOR}`,
		header: data.header,
		id: data.id,
		readTime: data.readTime,
		title: data.title,
		updated: data.updated,
		url: page.url.href,
		words: data.words
	};

	onMount(() => {
		isAtTopState.isAtTop = false;
	});
</script>

<Title />
<article
	class="prose prose-m3 mx-auto my-12 max-w-screen-md px-6 prose-pre:-mx-6 prose-pre:rounded-none md:mt-12 md:py-12 md:prose-pre:mx-0"
>
	{@html data.content}
</article>

<svelte:head>
	<title>{post.data.headTitle}</title>
</svelte:head>

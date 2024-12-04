<script lang="ts">
	import facebook from '@mdi/svg/svg/facebook.svg?raw';
	import twitter from '@mdi/svg/svg/twitter.svg?raw';
	import share from '@mdi/svg/svg/share-variant-outline.svg?raw';
	import arrowLeft from '@mdi/svg/svg/arrow-left.svg?raw';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { isAtTopState } from '$lib/state.svelte';
	import { Icon } from 'svelte-icon';
	import { AUTHOR } from '../../../config';

	let { data }: { data: PageData } = $props();

	onMount(() => {
		isAtTopState.isAtTop = false;
	});
</script>

<div class="border-b border-b-outlineVariant">
	<div class="mx-auto max-w-screen-xl gap-12 font-bold md:flex">
		<div class="flex-1 pb-9 pl-0 md:pl-8 md:pt-9">
			<div
				class="aspect-video w-full bg-cover md:hidden"
				style={`background-image: url(${import.meta.env.VITE_API_CLIENT}/api/files/${data.collectionId}/${data.id}/${data.header}?thumb=800x450})`}
			></div>
			<div class="mx-8 mt-9 md:mx-0 md:mt-0">
				<a class="group flex w-fit items-center gap-2 text-xs text-primary" href="/">
					<div class="relative left-0 transition-transform duration-300 group-hover:-translate-x-1">
						<Icon data={arrowLeft} size="18px" stroke="transparent" />
					</div>
					Back to Blog Home
				</a>
				<h1
					class="mt-6 text-[28px] sm:text-5xl md:mt-12 md:text-[64px] md:leading-tight min-[960px]:text-[90px] min-[960px]:leading-tight"
				>
					{data.title}
				</h1>
				<div class="mt-6 text-xs text-outline md:mt-12">
					<p>
						标签：
						{#each data.expand?.tags as { tag, slug }, i}
							<a
								href={`/tag/${slug}`}
								class="text-onSurfaceVariant underline-offset-2 hover:underline">{tag}</a
							>
							{#if i !== data.expand?.tags.length - 1},&nbsp;{/if}
						{/each}
					</p>
					<p class="mt-2">
						发布时间：
						<span class="font-mono font-medium text-onSurfaceVariant">
							{data.created}
						</span>
					</p>
					<p class="mt-2">
						字数：
						<span class="font-mono font-medium text-onSurfaceVariant">
							{data.words} words
						</span>
					</p>
					<div class="mt-6 flex items-center gap-2">
						<p>分享：</p>
						<div class="flex gap-0.5">
							<a
								class="rounded p-1 transition-colors hover:bg-surfaceContainer"
								href="/"
								target="_blank"
							>
								<Icon data={twitter} size="20px" stroke="transparent" />
							</a>
							<a
								class="rounded p-1 transition-colors hover:bg-surfaceContainer"
								href="/"
								target="_blank"
							>
								<Icon data={facebook} size="20px" stroke="transparent" />
							</a>
							<a
								class="rounded p-1 transition-colors hover:bg-surfaceContainer"
								href="/"
								target="_blank"
							>
								<Icon data={share} size="20px" stroke="transparent" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="flex-[2_1_0%] bg-cover bg-left min-[960px]:bg-center"
			style={`background-image: url(${import.meta.env.VITE_API_CLIENT}/api/files/${data.collectionId}/${data.id}/${data.header}?thumb=800x450})`}
		></div>
	</div>
</div>

<article
	class="prose prose-m3 mx-auto mb-12 mt-6 max-w-screen-md px-9 py-6 prose-p:leading-normal prose-pre:-mx-9 prose-pre:rounded-none md:mt-12 md:py-12 md:prose-pre:mx-0"
>
	{@html data.content}
</article>

<svelte:head>
	<title>{`${data.title} – ${AUTHOR}`}</title>
</svelte:head>

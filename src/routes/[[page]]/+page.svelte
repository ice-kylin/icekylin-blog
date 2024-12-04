<script lang="ts">
	import arrowRight from '@mdi/svg/svg/arrow-right.svg?raw';
	import Pagination from '$lib/component/pagination.svelte';
	import NoMoreContent from '$lib/component/no-more-content.svelte';
	import { isAtTopState } from '$lib/state.svelte';
	import { Icon } from 'svelte-icon';
	import type { PageData } from './$types';
	import { TITLE } from '../../config';
	import { onMount } from 'svelte';

	let { data }: { data: PageData } = $props();

	onMount(() => {
		isAtTopState.isAtTop = window.scrollY === 0;
	});
</script>

<div class="mb-20 mt-12">
	<ul class="mx-auto flex max-w-screen-xl flex-col gap-20 px-6 font-bold text-onSurfaceVariant">
		{#each data.items as item}
			<li>
				<div class="text-center">
					<a
						href={`/category/${item.category}`}
						class="w-fit font-mono text-xs uppercase tracking-widest"
					>
						{item.category}
					</a>
					<h1 class="text-[28px] text-onSurface transition-all hover:font-extrabold">
						<a href={`/post/${item.slug}`}>{item.title}</a>
					</h1>
					<p class="font-medium">{item.description}</p>
					<p class="mt-2 font-mono text-xs font-medium">
						{item.created}
					</p>
				</div>
				<a
					href={`/post/${item.slug}`}
					class="group mx-auto mb-10 mt-4 flex w-fit items-center gap-2 pl-1 text-primary"
				>
					READ MORE
					<div class="relative left-0 transition-transform duration-300 group-hover:translate-x-2">
						<Icon data={arrowRight} size="24px" stroke="transparent" />
					</div>
				</a>
				<a
					href={`/post/${item.slug}`}
					class="img-wrapper group relative mx-auto block w-fit overflow-hidden rounded after:absolute after:inset-0 after:bg-cover after:bg-no-repeat after:opacity-100 after:mix-blend-hard-light after:transition-opacity after:duration-700 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:bg-[url('/img/gradient-mesh.jpg')] hover:after:opacity-70"
				>
					<img
						alt={item.title}
						class="mx-auto aspect-video w-full max-w-[800px] transition-transform duration-700 group-hover:scale-105"
						src={`${import.meta.env.VITE_API_CLIENT}/api/files/${item.collectionId}/${item.id}/${item.header}?thumb=800x450`}
					/>
				</a>
			</li>
		{/each}
	</ul>
	{#if data.totalItems !== 0}
		{#if data.totalPages === 1}
			<NoMoreContent />
		{:else}
			<Pagination page={data.page} totalPages={data.totalPages} base="/" />
		{/if}
	{/if}
</div>

<svelte:head>
	<title>{TITLE}</title>
</svelte:head>

<style>
	.img-wrapper:hover::after {
		animation: bg-hue-animation 10s infinite;
	}

	@keyframes bg-hue-animation {
		0% {
			filter: hue-rotate(0deg);
		}

		50% {
			filter: hue-rotate(180deg);
		}

		100% {
			filter: hue-rotate(0deg);
		}
	}
</style>

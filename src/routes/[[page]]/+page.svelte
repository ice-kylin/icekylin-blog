<script lang="ts">
	import arrowRight from '@mdi/svg/svg/arrow-right.svg?raw';
	import Pagination from '$lib/component/pagination.svelte';
	import NoMoreContent from '$lib/component/no-more-content.svelte';
	import { Icon } from 'svelte-icon';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="mb-20 mt-12">
	<ul class="mx-auto flex max-w-screen-xl flex-col gap-20 px-6 font-bold">
		{#each data.items as item}
			<li>
				<div class="flex flex-col items-center gap-2 text-center">
					<a
						href={`/category/${item.category}`}
						class="w-fit text-xs font-bold uppercase tracking-widest text-onSurfaceVariant"
					>
						{item.category}
					</a>
					<a href={`/post/${item.slug}`}>
						<h1 class="text-[28px]">{item.title}</h1>
					</a>
					<p class="text-onSurfaceVariant">{item.description}</p>
					<p class="font-art text-xs font-normal text-onSurfaceVariant">
						{item.created.replaceAll('-', '/')}
					</p>
				</div>
				<a
					href={`/post/${item.slug}`}
					class="group mx-auto mb-10 mt-4 flex w-fit items-center gap-2 pl-1 text-primary"
				>
					阅读更多
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
						src={`http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item.header}?thumb=800x450`}
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

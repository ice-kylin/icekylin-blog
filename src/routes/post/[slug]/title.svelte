<script lang="ts">
	import { post } from './post.svelte';
	import { Icon } from 'svelte-icon';
	import Share from './share.svelte';
	import arrowLeft from '@mdi/svg/svg/arrow-left.svg?raw';
	import { formatTimestamp, getTimeAgo } from '../../../tool/date.js';

	const data = $derived(post.data);
	const created = $derived(formatTimestamp(data.created));
	const updated = $derived(formatTimestamp(data.updated));
</script>

<div class="mx-auto mt-8 max-w-screen-lg px-6 font-bold text-onSurfaceVariant">
	<a class="group flex w-fit items-center gap-2 text-xs hover:text-primary" href="/">
		<div class="relative left-0 transition-transform duration-300 group-hover:-translate-x-1">
			<Icon data={arrowLeft} size="18px" stroke="transparent" />
		</div>
		Back to Blog Home
	</a>
	<div class="mt-12 border-b-2 border-primary pb-12">
		<a
			class="w-fit font-mono text-xs uppercase tracking-widest"
			href={`/category/${data.category}`}
		>
			{data.category}
		</a>
		<h1
			class="mt-2 text-[28px] leading-normal text-onSurface md:w-4/6 md:text-[40px] md:leading-normal lg:text-5xl lg:leading-normal"
		>
			{data.title}
		</h1>
		<p class="mt-2 font-medium">{data.description}</p>
		<div class="img-wrapper mx-auto mt-6 block w-fit">
			<img
				alt={data.title}
				class="mx-auto aspect-video w-full"
				src={`${import.meta.env.VITE_API_CLIENT}/api/files/${data.collectionId}/${data.id}/${data.header}?thumb=800x450`}
			/>
		</div>
		<p class="mt-6 text-xs">
			<time class="font-mono font-medium" datetime={created.full} title={created.full}
			>{created.short}</time
			>
			<span class="px-1 text-primary">▪</span>
			{getTimeAgo(data.created)}
		</p>
		<p class="mt-2 text-xs">
			更新于
			<time class="font-mono font-medium" datetime={updated.full} title={updated.full}
			>{updated.short}</time
			>
			<span class="px-1 text-primary">▪</span>
			{getTimeAgo(data.updated)}
		</p>
		<p class="mt-2 text-xs">
			<span class="font-mono font-medium">{data.words}</span> 个字
			<span class="px-1 text-primary">▪</span>
			{data.readTime}
		</p>
		<Share />
	</div>
</div>

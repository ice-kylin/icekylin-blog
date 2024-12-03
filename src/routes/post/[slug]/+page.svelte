<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { isAtTopState } from '$lib/state.svelte';

	let { data }: { data: PageData } = $props();

	onMount(() => {
		isAtTopState.isAtTop = false;
	});
</script>

<div class="mb-20">
	<div class="border-b border-b-outlineVariant">
		<div class="mx-auto flex max-w-screen-xl gap-12 px-8 font-bold sm:px-0">
			<div class="flex flex-1 flex-col justify-center gap-12 py-9 pl-0 sm:pl-8">
				<h1 class="text-center text-5xl sm:text-start sm:text-[90px]">{data.title}</h1>
				<div class="text-xs text-outline">
					<p>标签：<span class="text-onSurfaceVariant"></span></p>
					<p class="mt-2">
						发布时间：<span class="font-mono font-medium text-onSurfaceVariant">{data.created}</span
						>
					</p>
					<p class="mt-2">字数 / 阅读用时：</p>
				</div>
			</div>
			<div
				class="flex-[2_1_0%] bg-cover"
				style={`background-image: url(${import.meta.env.VITE_API_CLIENT}/api/files/${data.collectionId}/${data.id}/${data.header}?thumb=800x450})`}
			></div>
		</div>
	</div>
</div>

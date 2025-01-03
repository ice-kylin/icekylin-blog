<script lang="ts">
	import { Icon } from 'svelte-icon';
	import facebook from '@mdi/svg/svg/facebook.svg?raw';
	import twitter from '@mdi/svg/svg/twitter.svg?raw';
	import share from '@mdi/svg/svg/share-variant-outline.svg?raw';
	import { post } from './post.svelte';

	const data = $derived(post.data);
	const xLink = $derived(
		`https://x.com/intent/tweet?url=${encodeURIComponent(
			data.url
		)}&text=${encodeURIComponent(data.headTitle)}`
	);

	async function onclick() {
		if (!navigator.share) {
			alert('您的浏览器不支持 Web Share API');

			return;
		}

		await navigator.share({
			title: data.headTitle,
			text: data.description,
			url: data.url
		});
	}
</script>

<div class="mt-6 flex gap-0.5 text-outline">
	<a class="rounded p-1 transition-colors hover:bg-surfaceContainer" href={xLink} target="_blank">
		<Icon data={twitter} size="20px" stroke="transparent" />
	</a>
	<a class="rounded p-1 transition-colors hover:bg-surfaceContainer" href="/" target="_blank">
		<Icon data={facebook} size="20px" stroke="transparent" />
	</a>
	<button class="rounded p-1 transition-colors hover:bg-surfaceContainer" {onclick}>
		<Icon data={share} size="20px" stroke="transparent" />
	</button>
</div>

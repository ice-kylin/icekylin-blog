<script lang="ts">
	import youtube from '@mdi/svg/svg/youtube.svg?raw';
	import twitter from '@mdi/svg/svg/twitter.svg?raw';
	import { Icon } from 'svelte-icon';
	import { FRIENDS, X, YOUTUBE } from '../../../config';
</script>

<div class="flex w-full flex-col gap-2 sm:w-fit">
	<p class="pb-2">FRIENDS</p>
	{#each FRIENDS as { name, href }}
		<a target="_blank" class="decoration-wavy underline-offset-4 hover:underline" {href}>{name}</a>
	{/each}
	<p>更多...</p>
	<div class="h-full"></div>
	<div class="flex gap-3">
		<a class="hover:text-surfaceContainerHigh" href={YOUTUBE} target="_blank">
			<Icon data={youtube} size="24px" stroke="transparent" />
		</a>
		<a class="hover:text-surfaceContainerHigh" href={X} target="_blank">
			<Icon data={twitter} size="24px" stroke="transparent" />
		</a>
	</div>
</div>

<script lang="ts">
	import { SOCIAL } from '../../../config';
</script>

<div class="flex w-full flex-col gap-2 sm:w-fit">
	<p class="pb-2">SOCIAL</p>
	{#each SOCIAL as { name, href }}
		<a target="_blank" class="decoration-wavy underline-offset-4 hover:underline" {href}>{name}</a>
	{/each}
</div>

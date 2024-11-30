<script lang="ts">
	import { clsx } from 'clsx';

	interface Props {
		page: number;
		totalPages: number;
		base: string;
	}

	const { page, totalPages, base }: Props = $props();
	const showFirst = page > 3 && totalPages > 5;
	const showLast = page + 2 < totalPages && totalPages > 5;
	const begin = totalPages > 5 ? Math.max(1, page - 2) : 1;
	const end = totalPages > 5 ? Math.min(totalPages, page + 2) : totalPages;
	const numbers = Array.from({ length: end - begin + 1 }, (_, i) => i + begin);
</script>

<div class="mt-12 flex items-center justify-center gap-4 font-art">
	{#if showFirst}
		<a
			href={`${base}1`}
			class="flex h-2 w-2 items-center justify-center rounded bg-surfaceContainerHighest text-transparent transition-colors hover:bg-transparent hover:text-onSurface"
		>
			1
		</a>
	{/if}
	{#each numbers as number}
		<a
			href={`${base}${number}`}
			class={clsx(
				'flex h-2 w-2 items-center justify-center rounded transition-colors ',
				page === number
					? 'bg-transparent text-primary'
					: 'bg-outlineVariant text-transparent hover:bg-transparent hover:text-onSurface'
			)}
		>
			{number}
		</a>
	{/each}
	{#if showLast}
		<a
			href={`${base}${totalPages}`}
			class="flex h-2 w-2 items-center justify-center rounded bg-surfaceContainerHighest text-transparent transition-colors hover:bg-transparent hover:text-onSurface"
		>
			{totalPages}
		</a>
	{/if}
</div>

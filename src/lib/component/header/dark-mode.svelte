<script lang="ts">
	import light from '@mdi/svg/svg/white-balance-sunny.svg?raw';
	import laptop from '@mdi/svg/svg/laptop.svg?raw';
	import dark from '@mdi/svg/svg/brightness-4.svg?raw';
	import { darkModeState } from '$lib/state.svelte';
	import { Icon } from 'svelte-icon';
	import { DarkMode } from '$lib/type';
	import { clsx } from 'clsx';
	import { modifyDataTheme, modifyLocalStorage } from '../../../tool/dark-mode';

	const MODES: {
		name: string;
		icon: string;
		mode: DarkMode;
	}[] = [
		{
			name: 'light',
			icon: light,
			mode: DarkMode.Light
		},
		{
			name: 'system',
			icon: laptop,
			mode: DarkMode.System
		},
		{
			name: 'dark',
			icon: dark,
			mode: DarkMode.Dark
		}
	];

	function setDarkMode(mode: DarkMode) {
		darkModeState.mode = mode;
		modifyDataTheme(mode);
		modifyLocalStorage(mode);
	}
</script>

<div class="flex gap-1 rounded-full bg-surfaceContainer p-1">
	{#each MODES as { name, icon, mode }}
		<button
			class={clsx(
				'rounded-full p-[5px]',
				darkModeState.mode === mode ? 'bg-primary text-onPrimary' : 'text-onSurfaceVariant'
			)}
			aria-label={`${name} mode`}
			onclick={() => setDarkMode(mode)}
		>
			<Icon data={icon} size="16px" stroke="transparent" />
		</button>
	{/each}
</div>

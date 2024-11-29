<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/noto-sans';
	import '@fontsource-variable/noto-sans-sc';
	import '@fontsource/tiny5';
	import { darkModeState } from '$lib/state.svelte';
	import { onMount } from 'svelte';
	import { getInitDarkMode, handleChange, modifyDataTheme } from '../tool/dark-mode';

	let { children } = $props();
	let mediaQuery: MediaQueryList;

	onMount(() => {
		darkModeState.mode = getInitDarkMode();
		modifyDataTheme(darkModeState.mode);
		mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', handleChange);
	});
</script>

{@render children()}

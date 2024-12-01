<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/noto-sans';
	import '@fontsource-variable/noto-sans-sc';
	import '@fontsource/tiny5';
	import Footer from '$lib/component/footer.svelte';
	import Header from '$lib/component/header.svelte';
	import { page } from '$app/stores';
	import { darkModeState, footerHeightState, siteStartDaysState } from '$lib/state.svelte';
	import { onMount, type Snippet } from 'svelte';
	import { getInitDarkMode, handleChange, modifyDataTheme } from '../tool/dark-mode';
	import type { LayoutData } from './$types';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let mediaQuery: MediaQueryList;
	let isErrorPage = $derived($page.status >= 400);
	siteStartDaysState.siteStartDays = data.siteStartDays;

	onMount(() => {
		darkModeState.mode = getInitDarkMode();
		modifyDataTheme(darkModeState.mode);
		mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', handleChange);
	});
</script>

{#if !isErrorPage}
	<Header />
	<div class="h-20"></div>
{/if}
{@render children()}
{#if !isErrorPage}
	<div style="height: {footerHeightState.height}px;"></div>
	<Footer />
{/if}

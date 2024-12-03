<script lang="ts">
	import Nav from './header/nav.svelte';
	import Bento from '$lib/emoji/bento.svelte';
	import DarkMode from './header/dark-mode.svelte';
	import { isAtTopState } from '$lib/state.svelte';
	import { clsx } from 'clsx';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let timer: number;

	function handleScroll() {
		clearTimeout(timer);
		timer = setTimeout(() => {
			if ($page.url.pathname.startsWith('/post')) {
				isAtTopState.isAtTop = false;
				return;
			}

			isAtTopState.isAtTop = window.scrollY === 0;
		}, 100);
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(timer);
		};
	});
</script>

<header
	class={clsx(
		"fixed left-0 right-0 top-0 z-40 bg-background transition-all after:absolute after:-bottom-10 after:left-0 after:right-0 after:h-10 after:bg-[url('/svg/wave-light.svg')] after:bg-repeat-x after:transition-opacity dark:after:bg-[url('/svg/wave-dark.svg')]",
		isAtTopState.isAtTop ? 'py-8 after:opacity-0' : 'pb-5 pt-6 after:opacity-100'
	)}
>
	<nav class="mx-auto flex max-w-[1344px] items-center justify-center gap-8 px-8 sm:justify-start">
		<a class="relative -top-1 transition-transform hover:-rotate-3" href="/">
			<Bento />
		</a>
		<Nav />
		<div class="ml-auto hidden sm:block">
			<DarkMode />
		</div>
	</nav>
</header>

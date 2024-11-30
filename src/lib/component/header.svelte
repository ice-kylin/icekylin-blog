<script lang="ts">
	import Nav from './header/nav.svelte';
	import Bento from '$lib/emoji/bento.svelte';
	import DarkMode from './header/dark-mode.svelte';
</script>

<header
	class="fixed left-0 right-0 top-0 z-40 bg-background after:absolute after:-bottom-10 after:left-0 after:right-0 after:h-10 after:bg-[url('/svg/wave-light.svg')] after:bg-repeat-x dark:after:bg-[url('/svg/wave-dark.svg')]"
>
	<nav
		class="mx-auto flex max-w-[1344px] items-center justify-center gap-8 px-8 pb-5 pt-6 sm:justify-start"
	>
		<a class="relative -top-1 transition-transform hover:-rotate-3" href="/">
			<Bento />
		</a>
		<Nav />
		<div class="ml-auto hidden sm:block">
			<DarkMode />
		</div>
	</nav>
</header>

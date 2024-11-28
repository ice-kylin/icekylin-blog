<script lang="ts">
	import Bento from '$lib/emoji/bento.svelte';
	import Nav from './header/nav.svelte';
	import Coffee from './header/coffee.svelte';
</script>

<header
	class="after:block after:h-10 after:w-full after:bg-[url('/svg/wave-light.svg')] after:bg-repeat-x"
>
	<nav class="mx-auto flex max-w-[1344px] items-center gap-8 px-8 py-8">
		<a href="/" class="relative -top-0.5 transition-transform hover:-rotate-3">
			<Bento />
		</a>
		<Nav />
		<Coffee />
	</nav>
</header>

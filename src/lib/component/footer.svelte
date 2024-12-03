<script lang="ts">
	import Bento from '$lib/emoji/bento-high-contrast.svelte';
	import FooterIcon from '$lib/icon/footer-icon.svelte';
	import Note from '$lib/component/footer/note.svelte';
	import Social from '$lib/component/footer/social.svelte';
	import Statistic from '$lib/component/footer/statistic.svelte';
	import Friends from '$lib/component/footer/friends.svelte';
	import { footerHeightState } from '$lib/state.svelte.js';
</script>

<footer
	bind:offsetHeight={footerHeightState.height}
	class="gradient absolute bottom-0 left-0 right-0 bg-[#3139FB] bg-no-repeat before:absolute before:inset-0 before:-z-10 before:backdrop-blur"
>
	<div class="bg-[url('/img/noise-light.png')] bg-repeat text-xs font-bold text-white drop-shadow">
		<div
			class="relative left-0 after:absolute after:-bottom-10 after:h-10 after:w-full after:bg-[url('/svg/wave.svg')] after:bg-repeat-x"
		>
			<p class="px-8 py-12 text-center text-2xl">博客积极维护中。</p>
		</div>
		<div class="flex flex-wrap gap-8 p-8 md:flex-row">
			<div class="w-full pr-2.5 md:w-fit">
				<a class="block w-fit transition-transform hover:-rotate-3" href="/">
					<Bento />
				</a>
			</div>
			<Note />
			<Social />
			<Statistic />
			<Friends />
			<div class="absolute bottom-9 right-9">
				<FooterIcon />
			</div>
		</div>
	</div>
</footer>

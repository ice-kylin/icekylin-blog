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
			<p class="text-pretty px-8 py-12 text-center text-2xl">歪比歪比歪比巴卜。</p>
		</div>
		<div class="flex flex-wrap gap-8 p-16 sm:p-8 md:flex-row">
			<a class="w-full pr-2.5 transition-transform hover:-rotate-3 md:w-fit" href="/">
				<Bento />
			</a>
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

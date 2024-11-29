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
	class="absolute bottom-0 left-0 right-0 bg-[#3139FB] bg-no-repeat before:absolute before:inset-0 before:-z-10 before:backdrop-blur"
>
	<div class="bg-[url('/img/noise-light.png')] bg-repeat text-xs font-bold text-white">
		<div
			class="relative left-0 after:absolute after:-bottom-10 after:h-10 after:w-full after:bg-[url('/svg/wave.svg')] after:bg-repeat-x"
		>
			<p class="text-pretty p-8 text-center text-2xl">歪比歪比歪比巴卜。</p>
		</div>
		<div class="flex flex-wrap gap-8 p-16 sm:p-9 md:flex-row">
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

<style>
    footer {
        background-image: radial-gradient(closest-side, rgb(235, 105, 78), rgba(235, 105, 78, 0)),
        radial-gradient(closest-side, rgb(243, 11, 164), rgba(243, 11, 164, 0)),
        radial-gradient(closest-side, rgb(255, 225, 0), rgba(254, 234, 131, 0)),
        radial-gradient(closest-side, rgb(170, 142, 245), rgba(170, 142, 245, 0)),
        radial-gradient(closest-side, rgb(248, 192, 147), rgba(248, 192, 147, 0));
        background-size: 130vmax 130vmax,
        80vmax 80vmax,
        90vmax 90vmax,
        110vmax 110vmax,
        90vmax 90vmax;
        background-position: -80vmax -80vmax,
        60vmax -30vmax,
        10vmax 10vmax,
        -30vmax -10vmax,
        50vmax 50vmax;
        animation: 10s movement linear infinite;
    }

    @keyframes movement {
        0%,
        100% {
            background-size: 130vmax 130vmax,
            80vmax 80vmax,
            90vmax 90vmax,
            110vmax 110vmax,
            90vmax 90vmax;
            background-position: -80vmax -80vmax,
            60vmax -30vmax,
            10vmax 10vmax,
            -30vmax -10vmax,
            50vmax 50vmax;
        }
        25% {
            background-size: 100vmax 100vmax,
            90vmax 90vmax,
            100vmax 100vmax,
            90vmax 90vmax,
            60vmax 60vmax;
            background-position: -60vmax -90vmax,
            50vmax -40vmax,
            0 -20vmax,
            -40vmax -20vmax,
            40vmax 60vmax;
        }
        50% {
            background-size: 80vmax 80vmax,
            110vmax 110vmax,
            80vmax 80vmax,
            60vmax 60vmax,
            80vmax 80vmax;
            background-position: -50vmax -70vmax,
            40vmax -30vmax,
            10vmax 0,
            20vmax 10vmax,
            30vmax 70vmax;
        }
        75% {
            background-size: 90vmax 90vmax,
            90vmax 90vmax,
            100vmax 100vmax,
            90vmax 90vmax,
            70vmax 70vmax;
            background-position: -50vmax -40vmax,
            50vmax -30vmax,
            20vmax 0,
            -10vmax 10vmax,
            40vmax 60vmax;
        }
    }
</style>

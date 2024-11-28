<script lang="ts">
	import Bento from '$lib/emoji/bento-high-contrast.svelte';
	import FooterIcon from '$lib/icon/footer-icon.svelte';
	import youtube from '@mdi/svg/svg/youtube.svg?raw';
	import twitter from '@mdi/svg/svg/twitter.svg?raw';
	import { Icon } from 'svelte-icon';
	import { footerHeightState } from '$lib/state.svelte.js';
	import { FRIENDS, SOCIAL, X, YOUTUBE } from '../../config';
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
			<div class="flex w-36 flex-col flex-wrap gap-2">
				<p class="pb-2">NOTE</p>
				<p class="text-pretty font-art font-normal">
					Code licensed under GPLv3, articles under CC BY-SA 4.0. Design by icekylin, inspired by
					<a class="underline" href="https://arc.net/blog">arc.net/blog</a> and created with love by
					icekylin. Powered by <a class="underline" href="https://svelte.dev/">SvelteKit</a>
					& <a class="underline" href="https://pocketbase.io/">PocketBase</a>.
				</p>
			</div>
			<div class="flex w-full flex-col gap-2 sm:w-fit">
				<p class="pb-2">SOCIAL</p>
				{#each SOCIAL as social}
					<a
						target="_blank"
						class="decoration-wavy underline-offset-4 hover:underline"
						href={social.url}>{social.name}</a
					>
				{/each}
			</div>
			<div class="flex w-full flex-col gap-2 sm:w-fit">
				<p class="pb-2">STATISTIC</p>
				<p><span class="font-art">xxx</span> 位访客</p>
				<p><span class="font-art">xxx</span> 次浏览</p>
				<p>更多...</p>
			</div>
			<div class="flex w-full flex-col gap-2 sm:w-fit">
				<p class="pb-2">FRIENDS</p>
				{#each FRIENDS as friend}
					<a
						target="_blank"
						class="decoration-wavy underline-offset-4 hover:underline"
						href={friend.url}>{friend.name}</a
					>
				{/each}
				<p>更多...</p>
				<div class="h-full"></div>
				<div class="flex gap-3">
					<a class="hover:text-surfaceContainerHigh" href={YOUTUBE} target="_blank">
						<Icon data={youtube} size="24px" stroke="transparent" />
					</a>
					<a class="hover:text-surfaceContainerHigh" href={X} target="_blank">
						<Icon data={twitter} size="24px" stroke="transparent" />
					</a>
				</div>
			</div>
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
		background-size:
			130vmax 130vmax,
			80vmax 80vmax,
			90vmax 90vmax,
			110vmax 110vmax,
			90vmax 90vmax;
		background-position:
			-80vmax -80vmax,
			60vmax -30vmax,
			10vmax 10vmax,
			-30vmax -10vmax,
			50vmax 50vmax;
		animation: 10s movement linear infinite;
	}

	@keyframes movement {
		0%,
		100% {
			background-size:
				130vmax 130vmax,
				80vmax 80vmax,
				90vmax 90vmax,
				110vmax 110vmax,
				90vmax 90vmax;
			background-position:
				-80vmax -80vmax,
				60vmax -30vmax,
				10vmax 10vmax,
				-30vmax -10vmax,
				50vmax 50vmax;
		}
		25% {
			background-size:
				100vmax 100vmax,
				90vmax 90vmax,
				100vmax 100vmax,
				90vmax 90vmax,
				60vmax 60vmax;
			background-position:
				-60vmax -90vmax,
				50vmax -40vmax,
				0 -20vmax,
				-40vmax -20vmax,
				40vmax 60vmax;
		}
		50% {
			background-size:
				80vmax 80vmax,
				110vmax 110vmax,
				80vmax 80vmax,
				60vmax 60vmax,
				80vmax 80vmax;
			background-position:
				-50vmax -70vmax,
				40vmax -30vmax,
				10vmax 0,
				20vmax 10vmax,
				30vmax 70vmax;
		}
		75% {
			background-size:
				90vmax 90vmax,
				90vmax 90vmax,
				100vmax 100vmax,
				90vmax 90vmax,
				70vmax 70vmax;
			background-position:
				-50vmax -40vmax,
				50vmax -30vmax,
				20vmax 0,
				-10vmax 10vmax,
				40vmax 60vmax;
		}
	}
</style>

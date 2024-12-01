<script lang="ts">
	import Compass from '$lib/emoji/compass.svelte';
	import Bento from '$lib/emoji/bento.svelte';
	import arrowRight from '@mdi/svg/svg/arrow-right.svg?raw';
	import { page } from '$app/stores';
	import { Icon } from 'svelte-icon';
</script>

<div
	class="gradient absolute inset-0 bg-[#3139FB] bg-no-repeat before:absolute before:inset-0 before:-z-10 before:backdrop-blur"
>
	<div
		class="flex h-full w-full flex-col items-center justify-center gap-2 bg-[url('/img/noise-light.png')] bg-repeat px-9 py-12 font-bold text-white drop-shadow"
	>
		<Compass />
		<h1 class="text-center font-art text-5xl font-normal">
			{$page.status}: {$page.error?.message}
		</h1>
		<p class="mt-2 text-center">
			啊呀，页面走丢了。<br />如果这是一个 Bug，欢迎告诉我！<br />
		</p>
		<a class="group mt-4 flex w-fit items-center gap-2 rounded-3xl pl-1" href="/">
			返回首页
			<div class="relative left-0 transition-transform duration-300 group-hover:translate-x-2">
				<Icon data={arrowRight} size="24px" stroke="transparent" />
			</div>
		</a>
		<a class="absolute bottom-8 transition-transform hover:-rotate-3 md:w-fit" href="/">
			<Bento />
		</a>
	</div>
</div>

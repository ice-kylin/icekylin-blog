<script lang="ts">
	import { siteStartDaysState } from '$lib/state.svelte';
	import { UMAMI } from '../../../config';
</script>

<div class="flex w-full flex-col gap-2 sm:w-fit">
	<p class="pb-2">STATISTIC</p>
	<p>本站已运行 {siteStartDaysState.siteStartDays} 天，真不容易</p>
	<p>
		<a class="decoration-wavy underline-offset-4 hover:underline" href={UMAMI} target="_blank">
			统计...
		</a>
	</p>
</div>

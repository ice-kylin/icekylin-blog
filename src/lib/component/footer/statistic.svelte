<script lang="ts">
	import { siteStartDaysState } from '$lib/state.svelte';
</script>

<div class="flex w-full flex-col gap-2 sm:w-fit">
	<p class="pb-2">STATISTIC</p>
	<p>本站已稳定运行 <span class="font-art">{siteStartDaysState.siteStartDays}</span> 天</p>
	<p><span class="font-art">xxx</span> 位访客</p>
	<p><span class="font-art">xxx</span> 次浏览</p>
	<p>更多...</p>
</div>

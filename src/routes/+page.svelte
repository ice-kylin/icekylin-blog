<script lang="ts">
	import Header from '$lib/component/header.svelte';
	import Footer from '$lib/component/footer.svelte';
	import { footerHeightState } from '$lib/state.svelte';
</script>

<div class="relative min-h-screen">
	<Header />
	<div style="height: {footerHeightState.height}px;"></div>
	<Footer />
</div>

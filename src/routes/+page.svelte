<script lang="ts">
	import Header from '$lib/component/header.svelte';
	import Footer from '$lib/component/footer.svelte';
	import { footerHeightState } from '$lib/state.svelte';
</script>

<Header />
<div class="h-20"></div>
<div style="height: {footerHeightState.height}px;"></div>
<Footer />

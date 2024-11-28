<script lang="ts">
	import coffee from './coffee.png?enhanced';
	import { COFFEE } from '../../../config';
</script>

<a
	href={COFFEE}
	target="_blank"
	aria-label="Buy Me a Coffee"
	class="ml-auto h-[34px] transition-transform hover:scale-105"
>
	<enhanced:img src={coffee} alt="Buy Me a Coffee" width="49" height="34" />
</a>

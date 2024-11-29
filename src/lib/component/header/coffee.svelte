<script lang="ts">
	import coffee from './coffee.png?enhanced';
	import { COFFEE } from '../../../config';
</script>

<a
	aria-label="Buy Me a Coffee"
	class="ml-auto h-[34px] transition-transform hover:scale-105"
	href={COFFEE}
	target="_blank"
>
	<enhanced:img alt="Buy Me a Coffee" height="34" src={coffee} width="49" />
</a>

<script lang="ts">
	import { clsx } from 'clsx';
	import { page } from '$app/stores';

	const LINKS = [
		{ name: '主页', href: '/' },
		{ name: '分类', href: '/categories' },
		{ name: '标签', href: '/tags' },
		{ name: '归档', href: '/archives' },
		{ name: '关于', href: '/about' },
		{ name: '友链', href: '/links' }
	];
</script>

<ul class="hidden items-center gap-6 text-sm font-bold text-onSurfaceVariant sm:flex">
	{#each LINKS as { name, href }}
		<li>
			<a
				{href}
				class={clsx(
					'decoration-primary decoration-wavy underline-offset-4 hover:text-primary hover:underline',
					$page.url.pathname === href && 'text-onSurface'
				)}
			>
				{name}
			</a>
		</li>
	{/each}
</ul>

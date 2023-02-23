<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<ul>
	<li>
		<a href="/"> Home</a>
	</li>
	<li>
		<a href="/posts">Posts</a>
	</li>
</ul>

<slot />

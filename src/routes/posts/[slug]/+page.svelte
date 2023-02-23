<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	function formatDate(date: Date) {
		return new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date);
	}
</script>

<h1>Post!!!!</h1>

<hgroup>
	<h1>{data.post.title}</h1>
	<h2>{formatDate(data.post.createdAt)}</h2>
</hgroup>

<div class="content">
	{@html data.post.content}
</div>

<style>
	.posts {
		margin-top: 2rem;
	}
</style>

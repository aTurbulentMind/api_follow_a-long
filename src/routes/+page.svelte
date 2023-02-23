<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts } = data);
</script>

<h1>Posts</h1>

<p>Showing {posts.length} posts.</p>

{#each posts as { slug, title }}
	<ul>
		<li>
			<a href="/posts/{slug}">{title}</a>
		</li>
	</ul>
{/each}

<!--
	
	REG_TEST
	
	
	<script lang="ts">
	async function subscribe(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		await fetch('/api/newsletter', {
			method: 'POST',
			body: data
		});
	}
</script>

<h1>Hello Newsboy</h1>

<form on:submit|preventDefault={subscribe}>
	<input type="email" name="email" />
	<button>Subscribe</button>
</form>




client-side-render
<script lang="ts">
	import type { Post } from '@prisma/client';

	async function getPosts() {
		const response = await fetch('api/posts');
		const posts: Post[] = await response.json();
		return posts;
	}
</script>

<h1>Posts</h1>

{#await getPosts()}
	<p>Loading...</p>
{:then posts}
	<p>Showing {posts.length} posts.</p>
	{#each posts as { slug, title }}
		<ul>
			<li>
				<a href="/posts/{slug}">{title}</a>
			</li>
		</ul>
	{/each}
{:catch error}
	<p>{error.message}</p>
{/await}
-->

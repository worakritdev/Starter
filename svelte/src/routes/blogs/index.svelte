<script context="module">
  import { API } from "$lib/Env";

  export async function load({ fetch }) {
    const res = await fetch(`${API}/blogs`);

    const blogs = await res.json();

    return {
      props: {
        blogs: blogs,
      },
    };
  }
</script>

<script lang="ts">
  import Card from "$lib/compoents/Card.svelte";

  export let blogs;
</script>

<div class="grid lg:grid-cols-3 mx-auto md:grid-cols-2">
  {#each blogs as blog}
    <Card {blog} />
  {/each}
</div>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>

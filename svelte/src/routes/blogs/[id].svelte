<script context="module">
  export async function load({ fetch, page }) {
    const res = await fetch(`${API}${page.path}`);
    const blog = await res.json();

    return {
      props: {
        blog: blog,
      },
    };
  }
</script>

<script>
  import { page } from "$app/stores";
  import { API } from "$lib/Env";
  const { id } = $page.params;

  export let blog
</script>
{JSON.stringify(blog)}
{id}
<ion-header>
  <ion-toolbar>
    <ion-title>{blog.title}</ion-title>
  </ion-toolbar>
</ion-header>

<!-- markup (zero or more items) goes here -->
<style>
  /* your styles go here */
</style>

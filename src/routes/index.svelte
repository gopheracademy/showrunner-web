<script context="module">
  export const prerender = true;
  export async function preload({ params }) {
    const res = await this.fetch(`http://127.0.0.1:1337/home`);
    const homepage = await res.json();
    return { homepage };
  }
</script>

<script>
  export let homepage;
  import { getContext } from "svelte";

  const eventlist = getContext("eventlist");

  import Announcement from "$components/Announcement.svelte";
  import Hero from "$components/Hero.svelte";
  const componentMap = {
    "page-components.announcement": Announcement,
    "page-components.hero": Hero,
  };

  let contents = homepage.Content;
  console.log(contents);
</script>

<style>
</style>

{#each contents as content}
  <svelte:component this={componentMap[content.__component]} {content} />
{/each}

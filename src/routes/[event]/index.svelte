<script context="module">
  export async function preload({ params }) {
    return { event: params.event };
  }
</script>

<script>
  export let event;
  import { getContext } from "svelte";

  const eventlist = getContext("eventlist");
  var conference;
  for (let i = 0; i < eventlist.length; i++) {
    if (eventlist[i].Slug === event) {
      event = eventlist[i];
    }
  }
</script>

<style>
</style>

<h3>{event.Name} Events</h3>
{#each event.Conferences as conf}
  <h4>{conf.Name}</h4>
{/each}

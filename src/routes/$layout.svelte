<script context="module">
  export const prerender = true;

  export async function preload({ params }) {
    const headers = {
      Accept: "application/json",
      "Accept-Encoding": "gzip",
      "Content-Type": "application/json",
    };
    const response = await this.fetch(
      "https://showrunner-46b2.encoreapi.com/azure/conferences.GetAll",
      {
        method: "POST",
        headers: headers,
        body: "{}",
      }
    );

    return response.json().then((events) => {
      if (events.error) {
        throw new Error(events.error);
      }
      return { events };
    });
  }
</script>

<script>
  export let segment;
  import Nav from "$components/Nav.svelte";

  import { setContext } from "svelte";
  export let events;
  export let eventlist = events.Events;

  setContext("eventlist", eventlist);
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} {eventlist} />

<main>
  <slot />
</main>

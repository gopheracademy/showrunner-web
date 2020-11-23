<script context="module">
  export async function preload({ params }) {
    return { conference: params.conference, event: params.event };
  }
</script>

<script>
  export let event;
  export let conference;
  import { getContext } from "svelte";

  const eventlist = getContext("eventlist");
  var conf;
  var ev;
  for (let i = 0; i < eventlist.length; i++) {
    if (eventlist[i].Slug === event) {
      ev = eventlist[i];
      break;
    }
  }

  for (let i = 0; i < ev.Conferences.length; i++) {
    if (ev.Conferences[i].Slug === conference) {
      conf = ev.Conferences[i];
      break;
    }
  }
</script>

<style>
</style>

{conf.Name}

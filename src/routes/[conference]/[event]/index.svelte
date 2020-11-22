<script context="module">
  export async function preload({ params }) {
    console.log("event:", params.event);
    return { conference: params.conference, event: params.event };
  }
</script>

<script>
  import { onMount } from "svelte";
  import ConferenceService from "$components/client.gen.js";
  export let conference = {};
  export let event = {};

  console.log("client conference:", conference);
  console.log("client event", event);

  onMount(async () => {
    var conferenceService = new ConferenceService();

    const response = await conferenceService.getBySlug({ slug: conference });
    console.log("response :", response);
    conference = response.conference;
  });
</script>

<style>
</style>

{conference.name}

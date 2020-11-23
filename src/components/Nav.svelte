<script>
  export let segment;
  export let eventlist;
</script>

<nav class="nav">
  <div class="nav-left">
    <a class="brand" href="/">GopherCon</a>
    <div class="tabs">
      {#each eventlist as event}
        {#each event.Conferences as conf}
          <a href="/{event.Slug}/{conf.Slug}">{conf.Name}</a>
        {/each}
      {/each}
    </div>
  </div>

  <div class="nav-right"><a class="button outline" href="/admin">Admin</a></div>
</nav>

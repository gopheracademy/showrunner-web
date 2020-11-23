<script>
  export let content;
</script>

<style>
</style>

<h1>{content.title}</h1>
<img src="http://127.0.0.1:1337{content.image.url}" />
<button text={content.cta}>{content.cta}</button>

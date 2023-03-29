<script lang="ts">
  import Layout from "../layouts/Layout.svelte";

  export let professor: Professor;
</script>

<Layout>
  <h1>{professor.name}</h1>
</Layout>

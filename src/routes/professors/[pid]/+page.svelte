<script lang="ts">
  import type { PageData } from "./$types";

  import ProfessorPage from "../../../pages/ProfessorPage.svelte";

  export let data: PageData;
</script>

<ProfessorPage professor={data.professor}/>
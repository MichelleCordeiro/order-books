<script>
  import ItemAutor from '../../components/autor/ItemAutor.svelte';
  import Title from '../../components/shared/Title.svelte';
  import autores from '../../constants/autores';
</script>

<div class="flex flex-col gap-10">
  <Title
    principal="Autores"
    secondary="Conheça os autores que escrevem as histórias que você ama!"
  />

  <div class="grid grid-cols-3 gap-5">
    {#each autores as autor}
      <ItemAutor autor={autor} />
    {/each}
  </div>
</div>

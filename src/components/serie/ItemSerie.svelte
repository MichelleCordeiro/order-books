<script lang="ts">
  export let serie: any = null;
</script>

{#if serie}
  <a
    href="/series/{serie.id}"
    class="flex flex-col rounded-md overflow-hidden border border-zinc-800"
  >
    <img
      src={serie.imagem}
      alt="Imagem da Serie"
      class="
        h-96 object-cover opacity-80
        transition-all duration-700 ease-in-out
        hover:opacity-100
      "
    />
    <div class="flex flex-col gap-2 p-5">
      <span class="text-2xl font-black">{serie.titulo}</span>
      <span class="text-lg text-zinc-400 text-justify">{serie.descricao}</span>
      <button class="button blue font-bold botao azul self-end">Leia mais</button>
    </div>
  </a>
{/if}

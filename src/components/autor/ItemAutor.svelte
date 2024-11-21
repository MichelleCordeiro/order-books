<script lang="ts">
  export let autor: any = null;
</script>

{#if autor}
  <a
    href="/autores/{autor.id}"
    class="
      flex flex-col relative rounded-md overflow-hidden border border-zinc-800
      hover:cursor-pointer
    "
  >
    <img
      src={autor.imagem}
      alt="Foto do Autor"
      class="
        h-96 object-cover opacity-80
        transition-all duration-700 ease-in-out
        hover:opacity-100 hover:scale-110
      "
    />
    <div class="absolute bottom-0 w-full flex justify-end px-6 py-4 bg-black/50">
      <span class="text-2xl font-black">{autor.nome}</span>
    </div>
  </a>
{/if}

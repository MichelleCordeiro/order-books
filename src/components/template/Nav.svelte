<script>
  export let title = "Menu"
</script>

<nav class="flex flex-col gap-3">
  <span class="font-bold text-white/40">{title}</span>
  <ul class="flex flex-col">
    <slot></slot>
  </ul>
</nav>

<script>
  export let text = ""
  export let href = "/"
  export let target = ""
</script>

<li>
  <a
    {href}
    {target}
    class="
      flex gap-2 items-center cursor-pointer px-4 py-2 text-zinc-300
      hover:tracking-wide hover:font-bold hover:text-white hover:bg-white/10
    "
  >
    <slot></slot>
    <span>{text}</span>
  </a>
</li>

<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
</script>

<div class="flex flex-col min-h-screen bg-black text-white">
  <Header />
  <main class="flex-1">
    <slot></slot>
  </main>
  <Footer />
</div>

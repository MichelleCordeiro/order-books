<script>
  import Nav from './Nav.svelte';
  import NavItem from './NavItem.svelte';
</script>

<aside class="w-72 flex flex-col gap-10 self-start border border-zinc-800 p-5 rounded-md">
  <Nav title="Navegação">
    <NavItem text="Inínio" href="/" />
    <NavItem text="Personagens" href="/" />
    <NavItem text="Autores" href="/autores" />
    <NavItem text="Séries" href="/" />
  </Nav>

  <Nav title="Principais Autores">
    <NavItem text="J.K. Rowling" href="/" />
    <NavItem text="J. R.R. Tolken" href="/" />
    <NavItem text="George R.R. Martin" href="autores/george-martin" />
  </Nav>

  <Nav title="Outras Categorias">
    <NavItem text="Últimas Notícias" href="/" />
    <NavItem text="Séries Populares" href="/" />
    <NavItem text="Facebook" href="www.facebook.com" target="_blank" />
    <NavItem text="Instagram" href="www.instagram.com" target="_blank" />
    <NavItem text="Youtube" href="www.youtube.com" target="_blank" />
  </Nav>
</aside>

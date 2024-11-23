<script>
  import { ordenaAutores } from '../../javascript/sortAuthors';
  import autores from '../../constants/autores';
  import Nav from './Nav.svelte';
  import NavItem from './NavItem.svelte';
  import { IconBook, IconBooks, IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconFriends, IconHome, IconPointFilled, IconRss, IconUsers } from '@tabler/icons-svelte';
  import Target from '@tabler/icons-svelte/icons/target';

  ordenaAutores()
</script>

<aside class="w-72 flex flex-col gap-10 self-start border border-zinc-800 p-5 rounded-md">
  <Nav title="Navegação">
    <NavItem text="Inínio" href="/">
      <IconHome size={20} />
    </NavItem>
    <NavItem text="Personagens" href="/">
      <IconFriends size={20} />
    </NavItem>
    <NavItem text="Autores" href="/autores">
      <IconUsers size={20} />
    </NavItem>
    <NavItem text="Séries" href="/">
      <IconBooks size={20} />
    </NavItem>
  </Nav>

  <Nav title="Principais Autores">
    {#each autores as autor}
      {#if autor}
        <NavItem text={autor.nome} href='/autores/{autor.id}'>
          <IconPointFilled size={20} />
        </NavItem>
      {/if}
    {/each}
  </Nav>

  <Nav title="Outras Categorias">
    <NavItem text="Últimas Notícias" href="/">
        <IconRss size={20} />
    </NavItem>
    <NavItem text="Séries Populares" href="/">
        <IconBook size={20} />
    </NavItem>
    <NavItem text="Facebook" href="www.facebook.com" target="_blank">
        <IconBrandFacebook size={20} />
    </NavItem>
    <NavItem text="Instagram" href="www.instagram.com" target="_blank">
        <IconBrandInstagram size={20} />
    </NavItem>
    <NavItem text="Youtube" href="www.youtube.com" target="_blank">
        <IconBrandYoutube size={20} />
    </NavItem>
  </Nav>
</aside>

const navbar = document.getElementById('nav-bar');
navbar.innerHTML = `
<nav>
  <div class="w-full md-padding-x">
    <div class="flex items-start container mx-auto py-5">
      <div class="flex-1">
        <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
        </div>
      </div>
      <div>
        <img class="bluebird-logo" src="assets/logos/logo.png" style="object-fit: contain;" />
      </div>
      <div class="flex-1">
        AA
      </div>
    </div>
  </div>
</nav>
`;
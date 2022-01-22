const navbar = document.getElementById('nav-bar');
navbar.innerHTML = `
<nav>
  <div class="w-full md-padding-x">
    <div class="flex items-start container mx-auto py-5">
      <div class="flex-1 flex justify-start">
        <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
        </div>
        <div class="nav-menu w-full h-screen absolute left-0 top-0" :class="showMenu ? 'mobile-nav' : ''" style="background-color: white; z-index: 3;">
          <div class="flex w-full justify-end py-5 md-padding-x">
            <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
              <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
              <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
              <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img class="bluebird-logo" src="assets/logos/logo.png" style="object-fit: contain;" />
      </div>
      <div class="flex-1">
        
      </div>
    </div>
  </div>
</nav>
`;
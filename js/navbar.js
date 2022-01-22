const navbar = document.getElementById('nav-bar');
navbar.innerHTML = `
<div class="nav-wrapper md:container md:mx-auto" style="background-color: transparent;">
  <nav class="navbar container-padding">
    <img v-if="!showMenu" @click="navigateHome()" src="assets/logo-white.png" alt="Company Logo" style="cursor: pointer;">
    <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
      <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
      <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
      <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
    </div>
    <ul class="sm-font-size bodyFont nav no-search" :class="showMenu ? 'mobile-nav' : ''" style="line-height: 1.2;">
      <div v-if="showMenu" class="navbar container-padding">
        <img @click="navigateHome()" src="assets/logo-black.png" alt="Company Logo" style="cursor: pointer;">
        <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
          <span class="bar" :style="[showMenu ? {'background-color':'#000'} : {'':''}]"></span>
        </div>
      </div>
      <li class="nav-item"><a href="/" :style="[currentTab == 'home' ? {'color':'var(--darkblue)'} : {'':''}]">Home</a></li>
      <li class="nav-item"><a href="/property-management" :style="[currentTab == 'property-management' ? {'color':'var(--darkblue)'} : {'':''}]">Property Management</a></li>
      <li class="nav-item"><a href="/tenant-placement" :style="[currentTab == 'tenant-placement' ? {'color':'var(--darkblue)'} : {'':''}]">Tenant Placement</a></li>
      <li class="nav-item"><a href="/tenant-rental-application" :style="[currentTab == 'tenant-rental-application' ? {'color':'var(--darkblue)'} : {'':''}]">Tenant Rental Application</a></li>
      <li class="nav-item"><a href="/faq" :style="[currentTab == 'faq' ? {'color':'var(--darkblue)'} : {'':''}]">FAQ</a></li>
      <li class="nav-item"><a href="/contact" :style="[currentTab == 'contact' ? {'color':'var(--darkblue)'} : {'':''}]">Contact Us</a></li>
      <li class="nav-item"><a href="/properties" :style="[currentTab == 'properties' ? {'color':'var(--darkblue)'} : {'':''}]">Properties</a></li>
    </ul>
  </nav>
  </div>
`;
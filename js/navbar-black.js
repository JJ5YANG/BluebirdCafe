const navbar = document.getElementById('nav-bar');
navbar.innerHTML = `
<div class="nav-wrapper md:container md:mx-auto" style="background-color: transparent;">
  <nav class="navbar container-padding">
    <img @click="navigateHome()" src="assets/logo-black.png" alt="Company Logo" style="cursor: pointer; z-index: 100;">
    <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()" style="z-index: 100;">
      <span class="bar" style="background-color: #000;"></span>
      <span class="bar" style="background-color: #000;"></span>
      <span class="bar" style="background-color: #000;"></span>
    </div>
    <ul class="sm-font-size bodyFont nav no-search" :class="showMenu ? 'mobile-nav' : ''" style="line-height: 1.2;">
      <li class="nav-item-black"><a href="/" :style="[currentTab == 'home' ? {'color':'var(--darkblue)'} : {'':''}]">Home</a></li>
      <li class="nav-item-black"><a href="/property-management" :style="[currentTab == 'property-management' ? {'color':'var(--darkblue)'} : {'':''}]">Property Management</a></li>
      <li class="nav-item-black"><a href="/tenant-placement" :style="[currentTab == 'tenant-placement' ? {'color':'var(--darkblue)'} : {'':''}]">Tenant Placement</a></li>
      <li class="nav-item-black"><a href="/tenant-rental-application" :style="[currentTab == 'tenant-rental-application' ? {'color':'var(--darkblue)'} : {'':''}]">Tenant Rental Application</a></li>
      <li class="nav-item-black"><a href="/faq" :style="[currentTab == 'faq' ? {'color':'var(--darkblue)'} : {'':''}]">FAQ</a></li>
      <li class="nav-item-black"><a href="/contact" :style="[currentTab == 'contact' ? {'color':'var(--darkblue)'} : {'':''}]">Contact Us</a></li>
      <li class="nav-item-black"><a href="/properties" :style="[currentTab == 'properties' ? {'color':'var(--darkblue)'} : {'':''}]">Properties</a></li>
    </ul>
  </nav>
  </div>
`;
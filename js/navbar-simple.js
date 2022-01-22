const navbar = document.getElementById('nav-bar');
navbar.innerHTML = `
<nav>
  <div class="w-full md-padding-x">
    <div class="flex items-center container mx-auto py-5">
      <div class="flex-1 flex justify-start">
        <img @click="navigateHome()" class="bluebird-logo" src="assets/logos/logo-straight.png" style="object-fit: contain;" />
        <div class="nav-menu w-full h-screen absolute left-0 top-0" :class="showMenu ? 'mobile-nav' : ''" style="background-color: white; z-index: 3;">
          <div class="flex w-full justify-end py-5 md-padding-x">
            <div class="menu-toggle" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
              <span class="bar" style="background-color: #000;"></span>
              <span class="bar" style="background-color: #000;"></span>
              <span class="bar" style="background-color: #000;"></span>
            </div>
          </div>
          <div class="w-full text-center flex justify-center">
            <img @click="navigateHome()" class="bluebird-logo" src="assets/logos/logo.png" style="object-fit: contain;" />
          </div>
          <div class="text-center w-full headerFont md-text font-bold">
            <div class="nav-item">
              <a href="/BluebirdCafe" :style="[currentTab == 'vue-home' ? {'color':'var(--green)'} : {'':''}]">
                HOME
              </a>
            </div>
            <div class="nav-item">
              <a href="contact" :style="[currentTab == 'vue-contact' ? {'color':'var(--green)'} : {'':''}]">
                CONTACT US
              </a>
            </div>
            <div class="nav-item">
              <a href="menu" :style="[currentTab == 'vue-menu' ? {'color':'var(--green)'} : {'':''}]">
                OUR MENU
              </a>
            </div>
          </div>
          <div class="flex items-center justify-center mt-8">
            <a href="https://www.instagram.com/" class="social-icons" target="_blank"><i class="fab fa-instagram" style="color: var(--black);"></i></a>
            <a href="https://www.facebook.com/" class="social-icons" target="_blank"><i class="fab fa-facebook-square" style="color: var(--black);"></i></a>
          </div>
        </div>
      </div>
      <div class="flex-1 flex justify-end items-center">
        <div class="menu-toggle lg:hidden" :class="showMenu ? 'is-active' : ''" id="mobile-menu" @click="toggleMenu()">
          <span class="bar" style="background-color: #000;"></span>
          <span class="bar" style="background-color: #000;"></span>
          <span class="bar" style="background-color: #000;"></span>
        </div>
        <div class="hidden lg:flex items-center font-bold sm-text">
          <div class="nav-item-desktop">
            <a href="/BluebirdCafe" :style="[currentTab == 'vue-home' ? {'color':'var(--green)'} : {'':''}]">
              HOME
            </a>
          </div>
          <div class="nav-item-desktop">
            <a href="contact" :style="[currentTab == 'vue-contact' ? {'color':'var(--green)'} : {'':''}]">
              CONTACT US
            </a>
          </div>
          <div class="nav-item-desktop">
            <a href="menu" :style="[currentTab == 'vue-menu' ? {'color':'var(--green)'} : {'':''}]">
              OUR MENU
            </a>
          </div>
        </div>
        <a href="https://www.instagram.com/" class="social-icons hidden lg:block" target="_blank"><i class="fab fa-instagram" style="color: var(--black);"></i></a>
        <a href="https://www.facebook.com/" class="social-icons hidden lg:block" target="_blank"><i class="fab fa-facebook-square" style="color: var(--black);"></i></a>
      </div>
    </div>
  </div>
</nav>
`;
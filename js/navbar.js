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
          <div class="w-full text-center flex justify-center">
            <img @click="navigateHome()" class="bluebird-logo" src="assets/logos/logo.png" style="object-fit: contain;" />
          </div>
          <div class="text-center w-full headerFont md-text font-bold">
            <div class="nav-item">
              <a href="/" :style="[currentTab == 'vue-home' ? {'color':'var(--green)'} : {'':''}]">
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
      <div>
        <img @click="navigateHome()" class="bluebird-logo" src="assets/logos/logo.png" style="object-fit: contain;" />
      </div>
      <div class="flex-1 flex justify-end">
        <a href="https://www.instagram.com/" class="social-icons" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/" class="social-icons" target="_blank"><i class="fab fa-facebook-square"></i></a>
      </div>
    </div>
  </div>
</nav>
`;
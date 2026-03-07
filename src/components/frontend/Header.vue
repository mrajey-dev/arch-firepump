<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <section>
    <div id="cursor-wrapper"></div>

    <!-- Loader -->
    <div v-if="isLoading" class="loader-overlay">
      <div class="pulse-ring-loader">
        <div class="ring"></div>
        <div class="ring"></div>
        <div class="center-dot"></div>
      </div>
    </div>

    <div v-if="isFading" class="fade-overlay"></div>
    <!-- Navbar -->
    <div class="container-fluid sticky-top" v-show="!isLoading">
      <div class="container">
       <nav class="navbar navbar-expand-lg navbar-light p-0 d-flex align-items-center justify-content-between">
  <!-- Logo -->
  <a href="/" class="navbar-brand d-flex align-items-center gap-2 logo-container">
    <img src="frontend/img/logo/logo.png" class="logo_arch" alt="Logo" />
    <!-- <h1 class="text-gradient logo-text logo">Arch Enterprises</h1> -->
     

 </a>
  <!-- Desktop Menu -->
 <div class="d-none d-lg-flex align-items-center gap-4 main-nav">

  <router-link to="/" class="nav-item nav-link nav-hover" exact-active-class="active">
    Home
  </router-link>

  <router-link :to="{ name: 'about' }" class="nav-item nav-link nav-hover" exact-active-class="active">
    About Us
  </router-link>

  <router-link to="/services" class="nav-item nav-link nav-hover" exact-active-class="active">
    Services
  </router-link>

  <router-link to="/career" class="nav-item nav-link nav-hover" exact-active-class="active">
    Career
  </router-link>

  <router-link to="/contact" class="nav-item nav-link nav-hover" exact-active-class="active">
    Contact Us
  </router-link>

  <a
    href="https://employees.archenterprises.co.in/"
    target="_blank"
    rel="noopener"
    class="nav-item-login btn-gradient"
  >
    Login
  </a>

  <button
    v-if="isAuthenticated"
    @click="logout"
    class="nav-item-login btn-gradient-danger"
  >
    Logout
  </button>

</div>


  <!-- Mobile Menu Icon -->
  <button
    type="button"
    class="navbar-toggler d-lg-none"
    @click="toggleMenu"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Mobile Overlay Menu -->
  <transition name="slide-fade">
    <div v-if="isMenuOpen" class="mobile-menu-overlay">
      <div class="mobile-menu-container text-center">
        <router-link to="/" class="nav-item nav-link nav-hover" @click="closeMenu">Home</router-link>
        <router-link :to="{ name: 'about' }" class="nav-item nav-link nav-hover" @click="closeMenu">About</router-link>

        <!-- Mobile Submenu -->
        <div class="mobile-submenu">
          <button class="nav-item nav-link nav-hover" @click="toggleSubmenu">
            Services <span :class="{ 'rotate': isSubmenuOpen }">▼</span>
          </button>
          <transition name="fade">
            <div v-if="isSubmenuOpen" class="submenu-items">
              <router-link :to="{ name: 'diesel-engine-services' }" class="nav-item nav-link" @click="closeMenu">Diesel Engine Services</router-link>
           <a href="#" class="nav-item nav-link" @click.prevent="goToIT">IT Services</a>

            </div>
          </transition>
        </div>

        <router-link to="/contact" class="nav-item nav-link nav-hover" @click="closeMenu">Contact</router-link>

        <a
          href="https://employees.archenterprises.co.in/"
          target="_blank"
          rel="noopener"
          class="nav-item-login btn-gradient mt-3 px-3 py-2"
        >
          Login
        </a>

        <button
          v-if="isAuthenticated"
          @click="logout"
          class="nav-item-login btn-gradient-danger mt-3 px-3 py-2"
        >
          Logout
        </button>
      </div>
    </div>
  </transition>
</nav>

      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: "HeaderSection",
  data() {
  return {
    isLoading: true,
    isAuthenticated: false,
    isMenuOpen: false,
    showDropdown: false,
    isSubmenuOpen: false,
    isFading: false,
  };
},

 mounted() {
  setTimeout(() => {
    this.isLoading = false;
    const token = localStorage.getItem("token");
    if (token) this.isAuthenticated = true;
  }, 1500);


},
  methods: {
    goToIT() {
    this.isFading = true;
    setTimeout(() => {
      window.location.href = "https://it.archenterprises.co.in";
    }, 1000); // 2 seconds delay before redirect
  },
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  },
  closeMenu() {
    this.isMenuOpen = false;
    this.isSubmenuOpen = false;
  },
  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  },
  logout() {
    localStorage.removeItem("token");
    this.isAuthenticated = false;
    this.$router.push("/login");
  },
},
};
</script>

<style lang="scss">
/* ---------------------- Loader ---------------------- */
/* ---------------------- Dropdown Styles ---------------------- */

/* From Uiverse.io by cbolson */ 
.fade-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0;
  animation: fadeInOverlay 2s forwards;
  z-index: 99999;
}

@keyframes fadeInOverlay {
  from { opacity: 0; }
  to { opacity: 1; }
}


.switch {
--_switch-bg-clr: #dedfe1;
    --_switch-padding: 4px;
    --_slider-bg-clr: rgb(255 255 255);
    --_slider-bg-clr-on: rgb(255 255 255);
    --_slider-txt-clr: #ffffff;
    --_label-padding: 1rem 2rem;
    --_switch-easing: 
cubic-bezier(0.47, 1.64, 0.41, 0.8);
  --_slider-txt-clr: #ffffff;
  --_label-padding: 1rem 2rem; /* padding around the labels -  this gives the switch it's global width and height */
  --_switch-easing: cubic-bezier(
    0.47,
    1.64,
    0.41,
    0.8
  ); /* easing on toggle switch */
  color: rgb(0, 0, 0);
  width: fit-content;
  display: flex;
  justify-content: center;
  position: relative;
  border-radius: 9999px;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  position: relative;
  isolation: isolate;
}

.switch input[type="checkbox"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.switch > span {
    font-size: 15px !important;
    height: 37px!important;
    width: 98px!important;
  display: grid;
  place-content: center;
  transition: opacity 300ms ease-in-out 150ms;
  padding: var(--_label-padding);
}
.switch::before,
.switch::after {
  content: "";
  position: absolute;
  border-radius: inherit;
  transition: inset 150ms ease-in-out;
}
/* switch slider */
.switch::before {
  background-color: var(--_slider-bg-clr);
  inset: var(--_switch-padding) 50% var(--_switch-padding)
    var(--_switch-padding);
  transition:
    inset 500ms var(--_switch-easing),
    background-color 500ms ease-in-out;
  z-index: -1;
  box-shadow:
    inset 0 1px 1px rgba(0, 0, 0, 0.3),
    0 1px rgba(255, 255, 255, 0.3);
}
/* switch bg color */
.switch::after {
  background-color: var(--_switch-bg-clr);
  inset: 0;
  z-index: -2;
}
/* switch hover & focus */
.switch:focus-within::after {
  inset: -0.25rem;
}
.switch:has(input:checked):hover > span:first-of-type,
.switch:has(input:not(:checked)):hover > span:last-of-type {
  opacity: 1;
  transition-delay: 0ms;
  transition-duration: 100ms;
}
/* switch hover */
.switch:has(input:checked):hover::before {
  inset: var(--_switch-padding) var(--_switch-padding) var(--_switch-padding)
    45%;
}
.switch:has(input:not(:checked)):hover::before {
  inset: var(--_switch-padding) 45% var(--_switch-padding)
    var(--_switch-padding);
}
/* checked - move slider to right */
.switch:has(input:checked)::before {
  background-color: var(--_slider-bg-clr-on);
  inset: var(--_switch-padding) var(--_switch-padding) var(--_switch-padding)
    50%;
}
/* checked - set opacity */
.switch > span:last-of-type,
.switch > input:checked + span:first-of-type {
  opacity: 0.75;
}
.switch > input:checked ~ span:last-of-type {
  opacity: 1;
}


.fade-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0;
  animation: fadeInOverlay 2s forwards;
  z-index: 99999;
}

@keyframes fadeInOverlay {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.dropdown-menu-custom {
  position: absolute;
  top: 100%;
  left: 0;
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  min-width: 220px;
  z-index: 1000;
  animation: fadeDown 0.3s ease forwards;

  .dropdown-item {
    display: block;
    padding: 10px 20px;
    color: #333;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background: linear-gradient(90deg, #007bff, #00d4ff);
      color: #fff;
    }
  }
}

/* Fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* ---------------------- Mobile Submenu ---------------------- */
.mobile-submenu {
  .submenu-items {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
  }

  span {
    
    font-size: 14px;
    margin-left: 6px;
    transition: transform 0.3s ease;
  }

  .rotate {
    transform: rotate(180deg);
  }
}

/* Fade-only animation for smooth menu appearance */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.4s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

/* Remove translate motion entirely */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.mobile-menu-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  animation: fadeIn 0.4s ease forwards;
}

.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pulse-ring-loader {
  position: relative;
  width: 80px;
  height: 80px;

  .ring {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid #3498db;
    border-radius: 50%;
    animation: pulse-ring 1.5s infinite ease-out;
    opacity: 0;
  }

  .ring:nth-child(1) { animation-delay: 0s; }
  .ring:nth-child(2) { animation-delay: 0.5s; }

  .center-dot {
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

@keyframes pulse-ring {
  0% { transform: scale(0.3); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

/* ---------------------- Navbar ---------------------- */
.navbar {
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.nav-hover {

  position: relative;
  font-weight: 500;
  color: #333;
  margin: 0 8px;
  padding: 6px 10px;
  transition: 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #007bff, #00d4ff);
    transition: 0.3s ease;
    border-radius: 2px;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: #007bff;
  }
}

/* ---------------------- Buttons ---------------------- */
.btn-gradient {
  background: linear-gradient(45deg, #007bff, #00d4ff);
  color: #fff !important;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.4);
  }
}

.btn-gradient-danger {
  background: linear-gradient(45deg, #ff4b5c, #ff758c);
  color: #fff !important;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 20px rgba(255, 75, 92, 0.4);
  }
}

/* ---------------------- Logo Gradient ---------------------- */
.logo-text {
  font-weight: 700;
      font-size: 25px;

  background: linear-gradient(90deg, #035b7a, #10305f);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ---------------------- Mobile Menu Overlay ---------------------- */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(255, 255, 255, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
}


@keyframes fadeDown {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* ---------------------- Mobile Adjustments ---------------------- */
@media (max-width: 768px) {
  .navbar {
    flex-wrap: nowrap;
  }

  .logo-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .logo-text {
    font-size: 18px;
    white-space: nowrap;
  }

  .navbar-toggler {
    margin-left: auto;
    z-index: 9999; /* stay above menu */
  }

  .nav-hover {
    font-size: 18px;
    margin: 8px 0;
  }
}
/* MAIN NAV */
.main-nav {
  font-weight: 500;
}

/* NAV LINKS */
.nav-link {
  position: relative;
  color: #1f2937;
  padding: 6px 2px;
  transition: color 0.3s ease;
}

/* HOVER UNDERLINE */
.nav-hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #ff7a18, #ffb347);
  transition: width 0.3s ease;
}

.nav-hover:hover {
  color: #ff7a18;
}

.nav-hover:hover::after {
  width: 100%;
}

/* ACTIVE LINK */
.nav-link.active {
  color: #ff7a18;
  font-weight: 600;
}

.nav-link.active::after {
  width: 100%;
}

/* LOGIN BUTTON */
.btn-gradient {
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #ff7a18, #ffb347);
  border: none;
  padding: 8px 20px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-gradient:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(255, 122, 24, 0.35);
}

/* LOGOUT BUTTON */
.btn-gradient-danger {
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #dc2626, #ef4444);
  border: none;
  padding: 8px 20px;
  transition: all 0.3s ease;
}

.btn-gradient-danger:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(239, 68, 68, 0.35);
}

</style>

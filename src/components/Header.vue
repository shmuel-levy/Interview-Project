<template>
  <div class="site-header">
    <!-- Mobile Header -->
    <div class="mobile-header show_in_mobile">
      <a class="site-logo" href="/" title="מרכז הנדל&quot;ן"></a>
    </div>

    <!-- Desktop Header -->
    <header class="desktop-header show_in_desktop">
      <!-- Right: Main Logo (spans full header height, not split) -->
      <div class="logo-container">
        <a class="site-logo" href="/" title="מרכז הנדל&quot;ן"></a>
      </div>

      <!-- Left: Header split into two stacked sections -->
      <div class="header-stack">
        <!-- Top Header Section -->
        <div class="header-top">
          <!-- Main Navigation Menu -->
          <ul class="main-menu">
            <li><a data-id="14" href="living-real-estate">נדל"ן למגורים</a></li>
            <li><a data-id="15" href="urban-innovation">התחדשות עירונית</a></li>
            <li><a data-id="41" href="fruitfull-real-estate">נדל"ן מניב והשקעות</a></li>
            <li><a data-id="646" href="magazine/category/182">דעות וניתוחים</a></li>
            <li><a data-id="42" href="magazine/category/1768">חדשות הענף</a></li>
            <li><a data-id="663" href="design-architect">עיצוב ואדריכלות</a></li>
            <li><a data-id="43" href="vod">נדל"ן TV</a></li>
            <li><a data-id="45" href="podcast">פודקאסטים</a></li>
          </ul>

          <!-- Social Media Icons (reversed order; X instead of Twitter; Instagram red fill) -->
          <ul class="social-icons-top">
            <li>
              <a class="social-icon instagram" target="_blank" href="https://www.instagram.com/nadlancenter.co.il/?utm_source=site">
                <svg class="svg-icon" aria-hidden="true" focusable="false" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6  -11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5 9 132.1 9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </a>
            </li>
            <li>
              <a class="social-icon" target="_blank" href="https://www.linkedin.com/company/israeli-real-estate-center/?utm_source=site">
                <svg class="svg-icon" aria-hidden="true" focusable="false" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
            </li>
            <li>
              <a class="social-icon" target="_blank" href="https://www.facebook.com/merkazhanadlan/?utm_source=site">
                <svg class="svg-icon" aria-hidden="true" focusable="false" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
              </a>
            </li>
            <li>
              <a class="social-icon" target="_blank" href="https://www.tiktok.com/@nadlan_center?_t=8ihQ3oK3mq1&_r=1">
                <svg class="svg-icon" aria-hidden="true" focusable="false" viewBox="0 0 448 512"><path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
              </a>
            </li>
            <li>
              <a class="social-icon" target="_blank" href="https://chat.whatsapp.com/CFhqV6KTR5rIDQCSD2VnyI">
                <svg class="svg-icon" aria-hidden="true" focusable="false" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
              </a>
            </li>
            <li>
              <a class="social-icon" target="_blank" href="https://twitter.com/mhndln/?utm_source=site" aria-label="X">
                <svg class="svg-icon" aria-hidden="true" focusable="false" viewBox="0 0 24 24">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a class="social-icon" target="_blank" href="https://www.youtube.com/@Nadlancente">
                <svg class="svg-icon" aria-hidden="true" focusable="false" viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Bottom Header Section -->
        <div class="header-bottom">
          <ul class="secondary-menu">
            <li><a data-id="49" href="https://madadtama38.co.il/" target="_blank">מדד ההתחדשות העירונית</a></li>
            <li><a data-id="386" href="/calculator">מחשבונים</a></li>
            <li><a data-id="644" href="https://tzair.coursesold.nadlancenter.co.il/" target="_blank">נדל"ן בראש צעיר</a></li>
            <li><a data-id="46" href="about">אודות מרכז הנדל"ן</a></li>
            <li><a data-id="664" href="https://z-report.courses.nadlancenter.co.il/" target="_blank">מכללת מרכז הנדל"ן</a></li>
            <li><a data-id="662" href="contact-us">צור קשר</a></li>
          </ul>

          <li class="search_container" :class="{ open: isSearchOpen }">
            <button class="search_btn" type="button" @click="openSearch" aria-label="Search">
              <svg class="search-icon" aria-hidden="true" focusable="false" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
            <input v-show="isSearchOpen" type="text" placeholder="חיפוש..." />
          </li>
        </div>
      </div>
    </header>

    

    <!-- Mobile Menu Button -->
    <div class="mobile-menu-btn show_in_mobile">
      <div class="hamburger-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isSearchOpen: false,
    }
  },
  methods: {
    openSearch() {
      this.isSearchOpen = !this.isSearchOpen
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: $white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

// Desktop Header Grid: Logo (right) + Two stacked sections (left)
.desktop-header {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: stretch;
  column-gap: 0;
  padding: 0;
  direction: rtl; // keep logo on the right in RTL
  height: auto;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px; // reduced from variable default
  padding: 0 14px; // slightly smaller side padding
  background: $white;

  .site-logo {
    display: block;
    width: 100%;
    max-width: 160px;
    height: 48px; // reduced height
    background-image: url('@/styles/images/NADLAN-LOGO.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}

.header-stack {
  display: grid;
  grid-template-rows: auto auto;
}

// Top Header Section
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $purple-main;
  color: $white;
  padding: 8px; // reduced further
  transition: all 0.4s ease;

  .main-menu {
    display: flex;
    list-style: none;
    gap: 20px; // tighter

    li a {
      color: $white;
      text-decoration: none;
      font-weight: 500;
      font-size: 15px; // smaller nav titles
      transition: opacity 0.2s ease;

      &:hover { opacity: 0.85; }
    }
  }

  .social-icons-top {
    display: flex;
    list-style: none;
    gap: 8px;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #FBF8FF;
      border-radius: 100px;
      padding: 4px;
      width: 28px;
      height: 28px;
    }

    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--orange-main); // icon color via currentColor
      
      .svg-icon {
        width: 12px;
        height: 12px;
      }

      &.instagram {
        color: $orange-main; // ensure red icon color for instagram
      }
    }
  }
}

// Bottom Header Section
.header-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: $white;
  padding: 8px; // reduced further
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0px 4px 69.7px 0px rgba(88, 6, 199, 0.14);

  .secondary-menu {
    display: flex;
    list-style: none;
    flex-wrap: wrap;
    gap: 14px; // tighter

    li a {
      color: $text-main;
      text-decoration: none;
      font-size: 13px; // smaller
      transition: color 0.2s ease;

      &:hover { color: $color-primary; }
    }
  }

  /* New search container styles matching spec */
  .search_container {
    display: flex;
    flex-direction: row-reverse; // place icon on the left edge
    align-items: center;
    gap: 0; // no gap when collapsed
    border: 1px solid var(--orange-main);
    border-radius: 60px;
    padding: 0; // perfectly center the icon when collapsed
    color: var(--orange-main);
    height: 36px; // make an exact circle in collapsed state
    width: 36px;  // make an exact circle in collapsed state
    justify-content: center; // center icon in circle
    transition: width 0.25s ease, padding 0.25s ease, gap 0.25s ease;

    &.open {
      width: 260px; // expanded width
      padding: 5px 10px; // add inner padding when expanded
      gap: 8px; // show spacing between icon and input when expanded
      justify-content: flex-start;
    }

    .search_btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      background: transparent;
      border: none;
      color: inherit;
      cursor: pointer; // pointer on hover
      padding: 0;
      line-height: 0; // remove inline baseline
    }

    .search-icon {
      width: 14px;
      height: 14px;
      flex: 0 0 auto;
      display: block; // avoid baseline alignment issues
    }

    input {
      flex: 1 1 auto;
      min-width: 0;
      border: none;
      outline: none;
      background: transparent;
      font-size: 13px;
      color: $text-main;
      &::placeholder {
        color: $orange-main; // red placeholder text
      }
    }
  }
}

/* Floating Search Popover */
// removed popover; now integrated into .search_container

// Mobile Header
.mobile-header {
  padding: 15px;
  border-bottom: 1px solid $light-grey;

  .site-logo {
    display: block;
    width: 110px; // slightly smaller
    height: 36px; // slightly smaller
    background-image: url('@/styles/images/NADLAN-LOGO.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
}

// Mobile Menu Button
.mobile-menu-btn {
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1001;

  .hamburger-icon {
    width: 30px;
    height: 25px;
    position: relative;
    cursor: pointer;

    span {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: $text-main;
      border-radius: 3px;
      transition: all 0.3s ease;

      &:nth-child(1) { top: 0; }
      &:nth-child(2) { top: 8px; }
      &:nth-child(3) { top: 16px; }
      &:nth-child(4) { top: 24px; }
    }

    &:hover span { background: $color-primary; }
  }
}

// Responsive
@media (max-width: 768px) {
  .desktop-header { display: none; }
  .mobile-header { display: block; }
}

@media (min-width: 600px) {
  .header-top { padding: 8px; }
  .header-bottom { padding: 8px; }
}

@media (min-width: 769px) {
  .mobile-header,
  .mobile-menu-btn { display: none; }
  .desktop-header { display: grid; }
}
</style>

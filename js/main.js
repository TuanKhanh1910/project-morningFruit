import AosModule from "./module/AosModule.js";
import Select2Module from "./module/Select2Module.js";
import GalleryModule from "./module/GalleryModule.js";
import TabModule from "./module/TabModule.js";
import headerMobile from "./headerMobile.js";
import { showSideBar } from "./sideBar.js";
import bannerSwiper from "./bannerSwiper.js";
import headerScroll from "./headerScroll.js";
import sliderSwiper from "./_sliderSwiper.js";

// import { sideBar } from "./sideBar.js";

window.addEventListener("DOMContentLoaded", () => {
  // Animation
  AosModule();
  // Tab
  TabModule();
  // Select
  Select2Module();
  // Component
  headerScroll();
  headerMobile();
  showSideBar();
  bannerSwiper();
  sliderSwiper();
});

export const showSideBar = () => {
  const showBar = document.getElementById("showSidebar");
  //   console.log("showBar: ", showBar);
  const sidebar = document.querySelector(".sidebar");

  showBar.onclick = () => {
    // console.log("hihi");
    sidebar.classList.toggle("show");
  };
  $(document).ready(function () {
    $(".sidebar-link").click(function () {
      event.preventDefault();
      $(this).parent().toggleClass("change");
      $(this).parent().children("#sidebar__drop-menu").slideToggle();
    });
  });
};

document.getElementById('open_btn').addEventListener('click', function (){
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  const sideItems = document.querySelectorAll(".side-item");

  sideItems.forEach(item => {
    item.addEventListener("click", () => {
      sideItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

const sidebar = document.getElementById("sidebar_content");
const openBtnIcon = document.getElementById("open_btn");

document.getElementById("open_btn").addEventListener("click", () => {
  sidebar.classList.toggle("open");


});
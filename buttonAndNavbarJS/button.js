
document.body.innerHTML+=`
<button id="navbarButton" class="dropbtn">ClickForShowMenu</button>
  <div id="myPlace" class="dropdown">

    <div id="myDropdown" class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>

`;


/* When the user clicks on the button,    navbarButton
toggle between hiding and showing the dropdown content */
    document.getElementById("navbarButton").addEventListener("click",function() {
      document.getElementById("myDropdown").classList.toggle("show");

    });



// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

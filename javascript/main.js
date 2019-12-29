// JavaScript source code

function revealActivity(activity) {
  if (activity == "web") {
    document.getElementById("web").style.backgroundColor = "#ffffff80";
    document.getElementById("webImage").style.display = "inline-block";
    document.getElementById("webText").innerHTML =
      "Creating my personal website";
  } else if (activity == "german") {
    document.getElementById("german").style.backgroundColor = "#ffffff80";
    document.getElementById("germanImage").style.display = "inline-block";
    document.getElementById("germanText").innerHTML = "Learning German";
  } else if (activity == "dance") {
    document.getElementById("dance").style.backgroundColor = "#ffffff80";
    document.getElementById("danceImage").style.display = "inline-block";
    document.getElementById("danceText").innerHTML = "Danceeeee!";
  }
}

function removeActivity(activity) {
  if (activity == "web") {
    document.getElementById("web").style.backgroundColor = "transparent";
    document.getElementById("webImage").style.display = "block";
    document.getElementById("webText").innerHTML = "";
  } else if (activity == "german") {
    document.getElementById("german").style.backgroundColor = "transparent";
    document.getElementById("germanImage").style.display = "block";
    document.getElementById("germanText").innerHTML = "";
  } else if (activity == "dance") {
    document.getElementById("dance").style.backgroundColor = "transparent";
    document.getElementById("danceImage").style.display = "block";
    document.getElementById("danceText").innerHTML = "";
  }
}

var menuOpen = false;

function toggleMobileMenu() {
  const navItems = document.querySelectorAll(".nav-item");
  if (!menuOpen) {
    navItems.forEach(navItem => navItem.classList.add("popup"));
    menuOpen = true;
  } else {
    navItems.forEach(navItem => navItem.classList.remove("popup"));
    menuOpen = false;
  }
}

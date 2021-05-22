function addUser(){
    math1_username = document.getElementById("math1_username").value;
    math2_username = document.getElementById("math2_username").value;

    localStorage.setItem("math1_username", math1_username);
    localStorage.setItem("math2_username", math2_username);

    window.location = "game_screen.html"
}


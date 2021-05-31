function home(){
    window.location = "app.html"
}
function logout(){
    localStorage.removeItem("Name");
    window.location = "login.html"
}
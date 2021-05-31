var user_name = localStorage.getItem("Name")
console.log(user_name)
document.getElementById("names").innerHTML = "Hi " + user_name + "!"

function ex(){
    window.location = "exer.html"
}
function poll(){
    window.location = "pollute.html"
}
function covid(){
    window.location = "covid.html"
}
function logout(){
    localStorage.removeItem("Name");
    window.location = "login.html"
}
function conc(){
    window.location = "contact.html"
}
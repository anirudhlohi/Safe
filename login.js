function ready(){
    name_user = document.getElementById("name").value;
    localStorage.setItem("Name",name_user )
    if(name_user == ""){
        document.getElementById("warn").innerHTML = "*Please Enter your name."
}
else{
    window.location="app.html"
}
}
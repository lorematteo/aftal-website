let inscription_link = document.getElementById("account");

inscription_link.addEventListener("click", showAccount);

function showAccount(){
    let create = document.getElementsByClassName("create_account");
    if(create.style.display == "none") {
        create.style.display == "flex";
    }
}

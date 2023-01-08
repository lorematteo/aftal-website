function addMusician(){
    let name = document.getElementById("name").value;
    let firstname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    let instrus = document.getElementById("instrus").value;

    let table = document.getElementById("librairies");
    
    let newRow = table.insertRow(table.length);
    var cell = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);

    cell.innerHTML = name;
    cell1.innerHTML = firstname;
    cell2.innerHTML = instrus;

    let cpt = 0; //on incrémente le compteur
    cpt = table.rows.length - 1;

    let result = document.getElementById("result");
    result.innerText = "Vous avez " + cpt + " musiciens ajoutées";

}
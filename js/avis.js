var info = document.forms.newReview; 


function ajouter(){

    const li = document.createElement("li")
    const p0 = document.createElement("p")
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    p0.textContent = "“";
    document.newReview.name.value == "" ? p2.textContent = "Anonyme" : p2.textContent = document.newReview.name.value;
    p1.textContent = document.newReview.avis.value;

    if (!document.newReview.avis.checkValidity()) {
        return
    }
    
    li.append(p0);
    li.append(p1);
    li.append(p2);

    const ul = document.querySelector('.reviews')
    ul.appendChild(li);

}
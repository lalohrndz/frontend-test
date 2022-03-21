let page = document.getElementById("page");
window.onload = getPeople(page.value);

function getPeople() {
    if(page.value == "null"){
        M.toast({html:`That are all the characters!`})
    }else{
        fetch(page.value)
        .then(function (response){
            return response.json();
        })
        .then(
            (json) =>{
                const people = json["results"];
                let person = document.getElementById("person");
                let pagination = document.getElementById("pagination");
        
                people.forEach(p => {
                    person.innerHTML = person.innerHTML +
                    `<li class="col s12 m6 l6">
                        <div class="collapsible-header">${p.name}</div>
                        <div class="collapsible-body">
                            <ul>
                                <li><a href="#">Heigh: ${p.height}</a></li>
                                <li><a href="#">Mass: ${p.mass}</a></li>
                                <li><a href="#">Hair color: ${p.hair_color}</a></li>
                                <li><a href="#">Skin color: ${p.skin_color}</a></li>
                                <li><a href="#">Eye color: ${p.eye_color}</a></li>
                                <li><a href="#">Birth year: ${p.birth_year}</a></li>
                                <li><a href="#">Gender: ${p.gender}</a></li>
                            </ul>
                        </div>
                    </li>`
                });
        
                page.value = json["next"];
            }
        )
    }
}

function searchCharacter(){
    let input = document.getElementById("search-input"),
    filter = input.value.toUpperCase(),
    ul = document.getElementById("person"),
    li = ul.getElementsByClassName("col s12 m6 l6"),
    name;

    for (let i = 0; i < li.length; i++) {
        name = li[i].getElementsByClassName("collapsible-header")[0].innerText;
        (name.toUpperCase().indexOf(filter) > -1) 
        ? li[i].style.display = "" 
        : li[i].style.display = "none";
    }
}
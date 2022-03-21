let page = document.getElementById("page");
window.onload = getPeople(page.value);

function getPeople() {
    console.log(page.value);    
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
                                <li>Heigh: ${p.height}</li>
                                <li>Mass: ${p.mass}</li>
                                <li>Hair color: ${p.hair_color}</li>
                                <li>Skin color: ${p.skin_color}</li>
                                <li>Eye color: ${p.eye_color}</li>
                                <li>Birth year: ${p.birth_year}</li>
                                <li>Gender: ${p.gender}</li>
                            </ul>
                        </div>
                    </li>`
                });
        
                page.value = json["next"];
            }
        )
    }
    
}


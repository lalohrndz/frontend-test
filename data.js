fetch('products.json')
    .then(function (response) {
        return response.json();
    })
    .then(
        (json)=>{
            const cards = document.getElementById("cards")

            for (const data in json) {
                json[data].forEach(product => {
                    let price = new Intl.NumberFormat('en-IN').format(product.price)
                    cards.innerHTML = cards.innerHTML + 
                    '<div class="card">'+
                        '<div class="card-content">'+
                            '<div class="img-card">'+
                                '<img src="img/'+product.img+'" alt="'+product.name+'">'+
                            '</div>'+
                            '<div>'+
                                '<h4>'+product.name+'</h4>'+
                                '<p>'+product.description+'</p>'+
                            '</div>'+
                            '<div class="card-action">'+
                                '<p>$'+price+'</p>'+
                                '<a href="#" class="btn-agregar waves-effect">AGREGAR</a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'
                });
            }
        }
        )
        .catch(function(err){
            console.log(err);
        });

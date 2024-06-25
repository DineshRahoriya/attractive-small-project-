

const totalPrice = jsonData.reduce((total, item) => {
    let card = document.createElement('div');
    card.classList.add('card');
    
    let imageElement = document.createElement('img');
    imageElement.src = ""; // Set image source
    
    let title = document.createElement('h1');
    title.textContent = item.title;
    
    let price = document.createElement('h2');
    price.textContent = item.price;
    
    let description = document.createElement('p');
    description.textContent = item.description;
    
    card.appendChild(imageElement);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);
    
    allcard.appendChild(card); // Append the card to the container
    
    return total + item.price; // Accumulate total price
}, 0);

console.log("Total Price:", totalPrice);


function showData(id){
    let carditems = document.querySelectorAll('.card');
    carditems.forEach(function(carditem){
        carditem.classList.remove('active');
    });

    let cardid = document.getElementById(id);
    cardid.classList.add('active');
}

function showAll(){
    let carditems = document.querySelectorAll('.card');
    carditems.forEach(function(carditem){
        carditem.classList.add('active');
    });
}

maincontainer();
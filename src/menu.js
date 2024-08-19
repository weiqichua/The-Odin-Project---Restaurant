const mains = document.createElement('div');
const beverages = document.createElement('div');    

mains.classList.add('mains');
beverages.classList.add('beverages');

const main1 = createMainItem('Fish and Chips', 'A classic British dish');
const main2 = createMainItem('Burger', 'A classic American dish');
const main3 = createMainItem('Pasta', 'A classic Italian dish');

mains.appendChild(main1);
mains.appendChild(main2);
mains.appendChild(main3);

const beverage1 = createBeverageItem('Coke', 'A refreshing drink');
const beverage2 = createBeverageItem('Tea', 'An even more refreshing drink');
const beverage3 = createBeverageItem('Latte', 'Great for pulling all nighters');

beverages.appendChild(beverage1);
beverages.appendChild(beverage2);
beverages.appendChild(beverage3);

export { mains, beverages };


function createMainItem(name, description) {
    const item = document.createElement('div');
    item.classList.add('main-item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;
    item.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    item.appendChild(itemDescription);

    return item
}

function createBeverageItem(name, description) {
    const item = document.createElement('div');
    item.classList.add('beverage-item');

    const itemName = document.createElement('h3');
    itemName.textContent = name;
    item.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    item.appendChild(itemDescription);

    return item
}

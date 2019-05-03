const httpForm = document.getElementById("httpForm");
const itemInput = document.getElementById("itemInput");
const imageInput = document.getElementById("imageInput");
const submitBtn = document.getElementById("submitBtn");
const itemList = document.querySelector(".items");
const feedback = document.querySelector(".feedback");
let editedItemID = 0;

const url = 'https://5ccb0b7454c8540014835258.mockapi.io/items';

// load items
const func = document.addEventListener("DOMContentLoaded", function() {
  getItemsAPI(showItems);
});

// get items
function getItemsAPI(callBack) {
  const url = 'https://5ccb0b7454c8540014835258.mockapi.io/items';

  const ajax = new XMLHttpRequest();

  ajax.open('GET', url, true);
  
  ajax.onload = function(){
    if(this.status === 200) {
      callBack(this.responseText);
    } else {
      console.log('Something went wrong!');
    }
  };

  ajax.onerror = function() {
    console.log('There was an error!');    
  };

  ajax.send();
}

// show items
function showItems(data) {
  const items = JSON.parse(data); 
  // console.log(items);
  let info = '';

  items.forEach(item => {
    info += `
    <li class="list-group-item d-flex align-items-center justify-content-between flex-wrap item my-2">
      <img src="${item.avatar}" alt="" id="itemImage" class="itemImage img-thumbnail">
      <h6 id="itemName" class="itemName">${item.name}</h6>
      <div class="icons">
        <a href="#" class="itemIcon mx-2 edit-icon" data-id="${item.id}">
          <i class="fas fa-edit"></i>
        </a>
        <a href="#" class="itemIcon mx-2 delete-icon" data-id="${item.id}">
          <i class="fas fa-trash"></i>
        </a>
      </div>
    </li>
    `
  });

  itemList.innerHTML = info;
}
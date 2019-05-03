const httpForm = document.getElementById("httpForm");
const itemInput = document.getElementById("itemInput");
const imageInput = document.getElementById("imageInput");
const submitBtn = document.getElementById("submitBtn");
const itemList = document.querySelector(".items");
const feedback = document.querySelector(".feedback");
let editedItemID = 0;

const url = 'http://5ccb0b7454c8540014835258.mockapi.io/items';

// load items
const func = document.addEventListener("DomContentLoaded", function() {

});

// get items
function getItemsAPI(callBack) {
  const url = 'http://5ccb0b7454c8540014835258.mockapi.io/items';

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
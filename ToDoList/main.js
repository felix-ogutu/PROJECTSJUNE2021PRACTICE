//javascript code the to do list
//declare the variables
const form = document.getElementById("addForm");
const list = document.getElementById("items");
const filter = document.getElementById("filter");

// add the event listeners
form.addEventListener("submit", addItem);
list.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);

//code to add the items
function addItem(e) {
  e.preventDefault(); // to prevent the default submission

  //get the item from the input
  let newItem = document.getElementById("items").value;

  // create the an li
  let li = document.createElement("li");

  //give it the class
  li.className = "items-item";

  //pass the value of the input
  li.appendChild(document.createTextNode(newItem));

  // include the li into the ul
  list.appendChild(li);

  let delButton = document.createElement("span");
  delButton.className = "delete";
  delButton.appendChild(document.createTextNode("x"));
  li.appendChild(delButton);
}

//  removeItem
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    //console.log('delete class');
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      list.removeChild(li);
    }
  }
}

//  Filter Item
function filterItems(e) {
  //  get the text in the search input & case insensitive
  let text = e.target.value.toLowerCase();

  //  get all the li
  let lists = document.getElementsByTagName("li");

  //  let's convert all the li in an array
  Array.from(lists).forEach(function (items) {
    let itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

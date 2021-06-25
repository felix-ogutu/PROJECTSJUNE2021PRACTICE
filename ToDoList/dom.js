// CODE TO CREATE THE NEW PARAGRAPH element
const para = document.createElement("p");
//to add the text to the element paragraph
const node = document.createTextNode(
  "Among the programming languages js is the best."
);
// append the text node
para.appendChild(node);
//add the new element to the existing one
const element = document.getElementById("container");
//code that appends the new elements to the existing one
element.appendChild(para);

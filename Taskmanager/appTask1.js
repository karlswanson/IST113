/* 
 Let's experiment with creating and manipulating DOM nodes
*/
function testDom() {

  let buttonElement = document.getElementById("buttonElement");
  let listOne = document.getElementById("listOne");
  

  // we can use an array of tag names to grab our inputs 
  let inputTags = document.getElementsByTagName("input");

  // We'll add a listener to our create element button
  buttonElement.addEventListener("click", function() {
    
    // pulling elements from our array
    let eContentValue = inputTags[0].value;

    
    // we'll use our function to create an element
    let newElem = createElement(eContentValue);
    
    // we have an element, but it isn't part of the DOM yet. 
    // For now, we'll append it to the end of our page div 
    listOne.appendChild(newElem);
  });
  
  // We'll add a listener to our swap button
 
    // now we can append it to list two
}
/*
  This function will use what we've learned to create and return a new list element
*/
function createElement(elemContent, elemClass) {
  // first we'll create a list element and text node
  let newElem = document.createElement("LI");
  let newContent = document.createTextNode(elemContent);
  
  // we'll add the text node as a child to our new element
  newElem.appendChild(newContent);
  
  // we can add click listeners as well
  // in this case, we're going to make each new item removable
  newElem.addEventListener("click", function() {
    this.parentNode.removeChild(this);
  });
  
  // then we can add a class
  newElem.classList.add(elemClass);
  
  // and return our new element
  return newElem;
}

testDom();
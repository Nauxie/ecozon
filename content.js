// Load new image

var newImage = document.createElement("div");
// and give it some content 
//newImage.id="toolimg";

//`chrome.extension.getURL("/images/get_started32.png")})`;
let logo = document.createElement("img");
logo.src= chrome.extension.getURL("/images/get_started32.png");

//newImage.innerText+=" ";
//newImage.style.visibility="visible";
//newImage.style.width = '1em';



// NEED TO DO
// 1. Create new div element, with all of its content inside (perhaps using element.innerHtml)
// 2. Set div element as child of newImage variable
// 3. Style the div element (using position: fixed and other styles) so it does not mess up with the rest of the page
// 4. Add a close button with an addEventListener('click', () => {}) so that it closes the tooltip when done (by toggling element.style.display between 'none' and 'block')
////newImage.setAttribute('title', '_new content_');
//<span class=tooltip>
var toolbar = document.createElement("div");
let ele = document.createElement("div");
let ce = document.createElement("img");
ce.src=chrome.extension.getURL("/img/stars.png");
ele.dataset.value=50;
if(ele.dataset.value){
ce.style.backgroundImage = `url(${chrome.extension.getURL("/img/bar.png")})`;
ce.style.backgroundPositionX = `${100-ele.dataset.value}%`;
}else{
  ce.style.backgroundColor = "red";
}
ele.appendChild(ce);
toolbar.innerText+="hello";
toolbar.class="toolbar";
newImage.appendChild(logo);
toolbar.appendChild(ele);
newImage.appendChild(toolbar);

// add the newly created image to the product title object
insertBElement = document.getElementById("averageCustomerReviews_feature_div")
insertBElement.parentNode.insertBefore(newImage,insertBElement);

// add the newly created element and its content into the DOM 
var currentDiv = document.getElementById("productTitle");
//document.body.insertBefore(newImage, currentDiv); 
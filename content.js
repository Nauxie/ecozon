// Load new image
var newImage = document.createElement("div");
// and give it some content 
//newImage.id="toolimg";

newImage.style.backgroundImage = `url(${chrome.extension.getURL("/images/get_started32.png")})`;
newImage.style.width = '1em';



// NEED TO DO
// 1. Create new div element, with all of its content inside (perhaps using element.innerHtml)
// 2. Set div element as child of newImage variable
// 3. Style the div element (using position: fixed and other styles) so it does not mess up with the rest of the page
// 4. Add a close button with an addEventListener('click', () => {}) so that it closes the tooltip when done (by toggling element.style.display between 'none' and 'block')
////newImage.setAttribute('title', '_new content_');
var toolbar = document.createElement("div");
toolbar.class="toolbar";
toolbar.onmouseover = () =>{
    toolbar.innerHTML="<span class=tooltip> hello </span>";
    toolbar.style.visibility = "visible";
}
toolbar.onmouseout = () =>{
    toolbar.style.visibility = "hidden";
}
newImage.appendChild(toolbar);


// add the newly created image to the product title object
document.getElementById("productTitle").appendChild(newImage);

// add the newly created element and its content into the DOM 
var currentDiv = document.getElementById("productTitle");
//document.body.insertBefore(newImage, currentDiv); 
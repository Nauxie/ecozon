
// Create a container for all the new code
var container = document.createElement("div");

// Craete an image
let logo = document.createElement("img");
logo.src= chrome.extension.getURL("/images/get_started32.png");
logo.style.cursor = 'pointer';

// Append the logo to the container
container.appendChild(logo);

//newImage.innerText+=" ";
//newImage.style.width = '1em';


// NEED TO DO
// 1. Create new div element, with all of its content inside (perhaps using element.innerHtml)
// 2. Set div element as child of newImage variable
// 3. Style the div element (using position: fixed and other styles) so it does not mess up with the rest of the page
// 4. Add a close button with an addEventListener('click', () => {}) so that it closes the tooltip when done (by toggling element.style.display between 'none' and 'block')
////newImage.setAttribute('title', '_new content_');
//<span class=tooltip>

// Create a tooltip
var tooltip = document.createElement("div");
// Style it so it is floating like a tooltip
tooltip.style.display = 'none';
tooltip.style.position = 'absolute';
tooltip.style.border = '1px solid grey';
tooltip.style.padding = '1em';
tooltip.style.zIndex = 1000;
tooltip.style.borderRadius = '10px';

// HERE ADD CONTENT
// Either through createElement + tooltip.appendChild
// OR with tooltip.innerHTML
//tooltip.innerHTML("hello");

tooltip.innerHTML = `
<span style="">Hello World</span>
<a href="http://google.com">Google</a>
`;

//var toolText = document.createTextNode("Hello");
//tooltip.appendChild(toolText);

// Append the tooltip to the container

container.appendChild(tooltip);

// Add an event handler so that whenever the logo is clicked, it will togle the tooltip
logo.addEventListener('click', function (e) {
    let isShowing = tooltip.style.display == 'block';
    // This toggles "isShowing", so block -> none, none -> block
    tooltip.style.display = isShowing ? 'none' : 'block';
});

// add the newly created image to the product title object
document.getElementById("ask_feature_div").appendChild(container);

// add the newly created element and its content into the DOM 
var currentDiv = document.getElementById("productTitle");
//document.body.insertBefore(newImage, currentDiv); 
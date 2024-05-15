console.log("dom manpulation lab....**");
//**************************************_1_ */
/*
Select and cache the <main> element in a variable named mainEl.
Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
Add a class of flex-ctr to mainEl.
Hint: Use the Element.classList API.
*/

let mainEl = document.getElementsByTagName("main");
console.log(mainEl);

mainEl[0].style.backgroundColor = "var(--main-bg)";

// mainEl[0].innerHTML=`<h1>Dom manipulation </h1>`
let heading = document.createElement("h1");
heading.innerHTML = "DOM MANUPULATION LAB";
console.log(heading);
mainEl[0].appendChild(heading);
//
mainEl[0].classList.add("flex-ctr");

//******************************************************___2____ */
/*
Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
Set the height of the topMenuEl element to be 100%.
Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
Add a class of flex-around to topMenuEl.
*/
let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//*****************************************************_______3_____ */
// Menu data structure

var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

/*
// Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.
*/

// let topMenuEl = document.getElementById("top-menu");
function assignLinks(links) {
  links.forEach((link) => {
    let aLink = document.createElement("a");
    aLink.textContent = link.text;
    aLink.href = link.href;

    topMenuEl.appendChild(aLink);
  });
}
assignLinks(menuLinks);

///*********************************************______4________** */
function assignLinks4(links) {
  links.forEach((link) => {
    let aLink = document.createElement("a");
    aLink.textContent = link.text;
    aLink.href = link.href;
    aLink.classList.add("active");
  });
}

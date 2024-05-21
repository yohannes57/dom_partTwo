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
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//*****************************************************_______3_____ */
// Menu data structure

// var menuLinks = [
//   { text: "about", href: "/about" },
//   { text: "catalog", href: "/catalog" },
//   { text: "orders", href: "/orders" },
//   { text: "account", href: "/account" },
// ];
let menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
/////////////////////////////
//catch up the subLinks to subLink
let subLink = [];
menuLinks.map((link) => {
  subLink.push(link.subLinks);
});
// console.log(subLink);

/////////////////////////////
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
// &**************part two continoue from here**************
// Part 1: Getting Started
/////done
// Part 2: Adding Additional HTML and CSS
//////Html and css are modified as it needed to be
// Part 3: Creating the Submenu
/*
  // Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
  // Set the height subMenuEl element to be "100%".
  // Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
  // Add the class of flex-around to the subMenuEl element.
  */

// Part 4: Adding Menu Interaction
/*
  //task to do
  Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
  Attach a delegated 'click' event listener to topMenuEl.
  The first line of code of the event listener function should call the event object's preventDefault() method.
  The second line of code of the function should immediately return if the element clicked was not an <a> element.
  Log the content of the <a> to verify the handler is working.

  &&&_Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing.
  //******************___now we add togle 
          // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
          // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
          // Hint: Removing a non-existent class from an element does not cause an error!

  */

let topMenuLinks = document.getElementsByTagName("a");
console.log(topMenuLinks);
for (let i = 0; i < topMenuLinks.length; i++) {
  topMenuLinks[i].addEventListener("click", (e) => {
    e.preventDefault();

    //toggle top menu
    topMenuLinks[i].classList.toggle("active");
    //check topMenuLinks[i] has value
    if (!topMenuLinks[i] == "a") return;

    //set attribute
    if (
      topMenuLinks[i].textContent == "about" ||
      topMenuLinks[i].textContent == "catalog" ||
      topMenuLinks[i].textContent == "orders" ||
      topMenuLinks[i].textContent == "account"
    ) {
      topMenuLinks[i].setAttribute("className", "active");
    }
    //log tocheck if active is assigned to topMenuLinks
    console.log(topMenuLinks[i].getAttribute("className")); //return active;

    //if its className is active ,the heiht 100 ...etc
    if (
      topMenuLinks[i].classList.contains("active") &&
      topMenuLinks[i].textContent != "about"
    ) {
      subMenuEl.style.height = "100%";
      subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
      subMenuEl.classList.add("flex-around");
      buildSubmenu(menuLinks[i].subLinks);
    } else {
      //remove or reverse back to
      subMenuEl.style.height = "0%";
      subMenuEl.innerHTML = " ";
      subMenuEl.classList.remove("flex-around");
    }
    //######################### when about clicked
    // console.log(topMenuLinks[i].textContent == "about", true); //true when about clicked
    if (topMenuLinks[i].textContent == "about") {
      // console.log("about clicked ", topMenuLinks[0].textContent);
      heading.innerHTML = "<h1>about</h1>";
      // console.log(heading, "..about from heading");
      mainEl[0].appendChild(heading);
    }
    ////////////////////////////////
    //clear other element if they have active className
    for (let j = 0; j < topMenuLinks.length; j++) {
      if (j !== i) {
        topMenuLinks[j].classList.remove("active");
      }
    }
    //
  });
}
//#######################################################
////Part 5: Adding Submenu Interaction
/*
  // Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
  // If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
  // Otherwise, set the CSS top property of subMenuEl to 0.
  // Hint: Caching the "link" object will come in handy for passing its subLinks array later.
  ///

  // Progress Check - Ensure that clicking CATALOG, ORDERS, etc. shows the submenu bar, and that clicking them again hides it. Clicking ABOUT should not show the submenu bar.
  // The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
  // Clear the current contents of subMenuEl.
  // Iterate over the subLinks array, passed as an argument, and for each "link" object:
  // Create an <a> element.
  // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
  // Set the element's content to the value of the text property of the "link" object.
  // Append the new element to the subMenuEl.
  */
let subMenuEl = document.getElementById("sub-menu");
function buildSubmenu(links) {
  links.forEach((link) => {
    let aLink = document.createElement("a");
    aLink.textContent = link.text;
    aLink.href = link.href;

    subMenuEl.append(aLink);
  });
}
/*
  5.2
  The menu is almost complete! Now, we need to add interactions to the submenu items themselves:
Attach a delegtaed 'click' event listener to subMenuEl.
The first line of code of the event listener function should call the event object's preventDefault() method.

The second line of code within the function should immediately return if the element clicked was not an <a> element.
Log the content of the <a> to verify the handler is working.

Next, the event listener should set the CSS top property of subMenuEl to 0.

Remove the active class from each <a> element in topMenuLinks.

Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
  
  */
///////eventListener for the submenu themselves
subMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("subLink ...", subLink.length);
  for (let i = 0; i < subLink.length; i++) {
    if (!subLink.length == "a") return;
    //
    if (
      topMenuLinks[i].classList.contains("active") &&
      topMenuLinks[i].textContent != "about"
    ) {
      subMenuEl.style.height = "100%";
      subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
      subMenuEl.classList.add("flex-around");
    } else {
      subMenuEl.style.height = "0%";
      // subMenuEl.innerHTML = "";
      subMenuEl.classList.remove("flex-around");
    }

    ////#######_when each subLinks clicked it displayed on h1
    // console.log("a..........", topMenuLinks[0].subLinks.textContent);
    console.log("hello");
    if (menuLinks[i].subLinks !== "about") {
      heading.innerHTML = topMenuLinks[i].subLinks;
      console.log(heading, "..about from heading");
      // subMenuEl.style.display = "none";
      mainEl[0].appendChild(heading);
    }

    ////
  }
});

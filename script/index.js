console.log("dom manpulation lab....**");
//*******_1_ */
/*
Select and cache the <main> element in a variable named mainEl.
Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
Add a class of flex-ctr to mainEl.
Hint: Use the Element.classList API.
*/
let mainEl=document.getElementsByTagName('main');
console.log(mainEl)

mainEl[0].style.backgroundColor="var(--main-bg)"
mainEl[0].style.borderTop="0px"

let heading=document.createElement('h1');
heading.innerHTML="DOM MANUPULATION LAB";
console.log(heading)
mainEl[0].appendChild(heading);

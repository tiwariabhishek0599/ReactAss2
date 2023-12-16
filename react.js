// const React = require("react");

let root=document.querySelector(".root");

let heading=React.createElement("h1",null,"Topics covered")
 
let para1=React.createElement("p",null,"The following is a list of all the topics we cover in the MDN learning area.");

let divOne = React.createElement('div',null,para1);

let anchor1 = React.createElement('a',{href:"#",className:"anchors"},"Getting started with the web");
let para2 = React.createElement('p',null,"Provides a practical introduction to web development for complete beginners");
let divTwo = React.createElement('div',{className:'contens'},anchor1,para2);

let anchor2 = React.createElement('a',{href:"#",className:"anchors"},"HTML - Structuring the web");
let para3 = React.createElement('p',null,"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. The topic teaches HTML in details.");
let divThree = React.createElement('div',{className:'contens'},anchor2,para3);

let anchor3 = React.createElement('a',{href:"#",className:"anchors"},"CSS - Styling the web");
let para4 = React.createElement('p',null,"CSS is the langauge that we use to control our web content's style and layout, as well as adding behavior like animation. This topics provides comprehensive coverage of CSS.");
let divFour = React.createElement('div',{className:'contens'},anchor3,para4);

ReactDOM.render([heading, divOne, divTwo, divThree, divFour],root);



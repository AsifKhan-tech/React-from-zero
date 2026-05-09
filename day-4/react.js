function customRender(reactElement, mainContainer) {
  //create the element
  const domElement = document.createElement(reactElement.type); //document.createEelement("a")

  //set the text that renders on browser
  domElement.innerHTML = reactElement.children; //Click here to visit google

  //set attributes
  domElement.setAttribute("href", reactElement.props.href); //href="https://google.com"
  domElement.setAttribute("target", reactElement.props.target); //target="_blank"

  //append this element in main-container
  mainContainer.appendChild(domElement);
  /*
  <div id="root">
  <a href="https://google.com" targt="_blank">Click here to visit google</a>
  </div>
  */
}

//<a href="https://google.com" target="_blank">Click here to visit google</a>
const reactElement = {
  type: "a", //HTML element
  props: {
    href: "https://google.com", //Attributs
    target: "_blank",
    name: "anchor",
  },
  children: "Click here to visit google", //text that renders on browser
};
const mainContainer = document.getElementById("root");

// customRender(reactElement, mainContainer);
// what to inject // where to inject

function customElementRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue; // if children(that will render on browesr) in props object
    domElement.setAttribute(prop, reactElement.props[prop]);

    /* props:{
                                              href:".......",
                                              target:"....."
                                              }
                                            1st:- href (prop, reactElement.props["href"])
                                                                                "https://google.com"
                                            2nd:- target (prop, reactElement.props["target"])
                                                                                  "_blank"
                                              */
  }
  mainContainer.appendChild(domElement);
}
customElementRender(reactElement, mainContainer);

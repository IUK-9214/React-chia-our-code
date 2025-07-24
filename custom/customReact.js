//here is the customrender function
function customRender(reactElement,conatiner){
const DomElement=document.createElement(reactElement.type);
DomElement.innerhtml=reactElement.children
for(const prop in reactElement.props){
    if(prop==='children')continue;
    DomElement.setAttribute(prop,reactElement.props[prop])
}
conatiner.appendChild(DomElement)
}

//element in  our react can be defijne like that ;
const ReactElement={
    type  : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
children: 'click me to visit google '
}
// this is the main conatiner in which we add element and ot direct the element to the  main indecxx.html
const maincontainer=document.querySelector('#root')
//now we need a function which render the element to the main conatiner

//it will add the reactaElement to te mainconatiner
customRender(ReactElement,maincontainer);


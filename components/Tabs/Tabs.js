
class TabLink {
  constructor(tab,link) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.link = link;
    this.tabComponent = tab;
    // Get the custom data attribute on the Link
    // Using the custom data attribute get the associated Item element
    this.itemElement = this.tabComponent.querySelector(`.tabs-item[data-tab="${this.link.dataset.tab}"]`);
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.tabComponent,this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.link.addEventListener('click', () => this.select())

  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = this.tabComponent.querySelectorAll('.tabs-link');
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(link => {
      link.classList.remove('tabs-link-selected');
    });
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.link.classList.add('tabs-link-selected')
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(tab,item) {
    // Assign this.element to the passed in element
    // this.element;
    this.item = item;
    this.tab = tab;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    // Remove the class "tabs-item-selected" from each element
    
    const tabItems = this.tab.querySelectorAll('.tabs-item');
    //console.log(tabItems)
    tabItems.forEach(item => {
      item.classList.remove('tabs-item-selected')
    });
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.item.classList.add('tabs-item-selected');
  }
}

let cookies = ['cookie1','cookie2','cookie3']
//console.log(cookies[1]);
cookies.forEach(cookie => {
  cookie !== cookies[0] ? console.log(cookie) :false;
})
/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => {
  links = tab.querySelectorAll('.tabs-link');
  links.forEach(link => { 
    new TabLink(tab,link);
  })
});

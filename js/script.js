flavours = [
   {name: 'Vanilla', price: 10}, 
   {name: 'Chocolate', price: 15},
   {name: 'Strawberry', price: 10},
   ];

   containerTpes = [
       {name: 'Plain Cone', price: 20},
       {name: 'Sugar Cone', price: 30},
       {name: 'Paper cup', price: 10}
   ];

   toppings = [
       {name: 'Crumbed peanuts', price: 10},
       {name: 'Caramal dip', price: 20},
       {name: 'Chocolate Dip', price: 30},
       {name: 'Smarties', price: 40},
       {name: 'Oreos', price: 30},
       {name: 'Astros', price: 15},
   ]

const getPriceBtn = document.querySelector('.getPrice');

const createBuyIceCreamInstance = createBuyIceCream(flavours, containerTpes, toppings);

function calculatePrice() {
   let flavourOptions = document.querySelectorAll('.flavourOption');
   let containerOptions = document.querySelectorAll('.containerOption');
   let checkBoxOptions = document.querySelectorAll('.checkboxes');

   flavourOptions.forEach( (flavourOption) => {
      if(flavourOption.selected) {
         createBuyIceCreamInstance.setSelectedFlavour(flavourOption.value);
      }
   });

   containerOptions.forEach( (option) => {
      if(option.selected) {
         createBuyIceCreamInstance.setSelectedContainer(option.value);
      }
   });

   checkBoxOptions.forEach( (option) => {
      if(option.checked) {
         createBuyIceCreamInstance.setSelectedTopping(option.value);
         alert(createBuyIceCreamInstance.getToppingPrice());
      }
   });

   createBuyIceCreamInstance.calcTotalPrice();
   document.querySelector('.price').innerHTML = createBuyIceCreamInstance.getTotalPrice();


}



if(flavours) {
   let newflavours = {flavours}
   createFlavourHTML(newflavours)
}

if(containerTpes) {
   let newContainers = {containerTpes}
   createContainerHTML(newContainers)
}

if(toppings) {
   let newToppings = {toppings}
   createToppingHTML(newToppings)
}

function createFlavourHTML(list) {
   let rawTemplate = document.querySelector('.flavoursTemplate').innerHTML;
   let compiledTemplate = Handlebars.compile(rawTemplate);
   let ourGeneratedHTML = compiledTemplate(list);
   let displayDataElem = document.querySelector('.flavourOptions');
   displayDataElem.innerHTML = ourGeneratedHTML;
}

function createContainerHTML(list) {
   let rawTemplate = document.querySelector('.containersTemplate').innerHTML;
   let compiledTemplate = Handlebars.compile(rawTemplate);
   let ourGeneratedHTML = compiledTemplate(list);
   let displayDataElem = document.querySelector('.containerOptions');
   displayDataElem.innerHTML = ourGeneratedHTML;
}

function createToppingHTML(list) {
   let rawTemplate = document.querySelector('.toppingsTemplate').innerHTML;
   let compiledTemplate = Handlebars.compile(rawTemplate);
   let ourGeneratedHTML = compiledTemplate(list);
   let displayDataElem = document.querySelector('.boxContainer');
   displayDataElem.innerHTML = ourGeneratedHTML;
}


getPriceBtn.addEventListener('click', calculatePrice);

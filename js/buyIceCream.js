function createBuyIceCream(flavoursData, containerTypesData, toppingsData) {
   let flavours = flavoursData || [];
   let containerTypes = containerTypesData || [];
   let toppings = toppingsData || [];

   let totalPrice = 0;
   let flavourPrice = 0;
   let containerPrice = 0;
   let toppingPrice = 0;
  
   function calcTotalPrice() {
      totalPrice = flavourPrice + containerPrice + toppingPrice;
   }
   function setSelectedFlavour(value) {
      const flavoursLookingFor = flavours.find(function(option){
         return option.name == value;
      });
      flavourPrice = flavoursLookingFor.price;
   }
   function setSelectedContainer(value) {
      const containerLookingFor = containerTypes.find(function(option){
         return option.name == value;
      });
      containerPrice = containerLookingFor.price;
   }
   function setSelectedTopping(value) {
      toppings.forEach( option => {
         if(option.name == value) {
            toppingPrice += option.price;
         }
      });
   }

   function getFlavourPrice() {
      return flavourPrice.toFixed(2);
   }
   function getContainerPrice() {
      return containerPrice.toFixed(2);
   }
   function getToppingPrice() {
      return toppingPrice.toFixed(2);
   }
   function getTotalPrice() {
      return totalPrice.toFixed(2);
   }

 
   return {
      calcTotalPrice,
      setSelectedFlavour,
      setSelectedContainer,
      setSelectedTopping,
      getFlavourPrice,
      getContainerPrice,
      getToppingPrice,
      getTotalPrice
   }
}
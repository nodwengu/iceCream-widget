
describe("Buy Ice Cream Function", function() {
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

    it('should be able to return the price for a selected flavour', function(){
        const createBuyIceCreamInstance = createBuyIceCream(flavours, containerTpes, toppings);

        createBuyIceCreamInstance.setSelectedFlavour("Chocolate")
        assert.equal(createBuyIceCreamInstance.getFlavourPrice(), 15.00);
       
    });

    it('should be able to return the price for a selected container type', function(){
        const createBuyIceCreamInstance = createBuyIceCream(flavours, containerTpes, toppings);

        createBuyIceCreamInstance.setSelectedContainer("Plain Cone")
        assert.equal(createBuyIceCreamInstance.getContainerPrice(), 20.00);
       
    });

    it('should be able to return the price for a selected topping', function(){
        const createBuyIceCreamInstance = createBuyIceCream(flavours, containerTpes, toppings);
        
        createBuyIceCreamInstance.setSelectedTopping("Crumbed peanuts")
        createBuyIceCreamInstance.setSelectedTopping("Oreos")
        assert.equal(createBuyIceCreamInstance.getToppingPrice(), 40.00);
       
    });

    it('should be able to calculte and return the total for selected options', function(){
        const createBuyIceCreamInstance = createBuyIceCream(flavours, containerTpes, toppings);
        
        createBuyIceCreamInstance.setSelectedTopping("Crumbed peanuts")
        createBuyIceCreamInstance.setSelectedTopping("Oreos")

        createBuyIceCreamInstance.setSelectedFlavour("Chocolate")
        createBuyIceCreamInstance.setSelectedContainer("Plain Cone")

        createBuyIceCreamInstance.calcTotalPrice();

        assert.equal(createBuyIceCreamInstance.getTotalPrice(), 75.00);
       
    });
    
    
    
});

// flavours = [
//     {name: 'Vanilla', price: 10}, 
//     {name: 'Chocolate', price: 15},
//     {name: 'Strawberry', price: 10},
// ];

// cotainerTpes = [
//     {name: 'Plain Cone', price: 2},
//     {name: 'Sugar Cone', price: 2},
//     {name: 'Paper cup', price: 2}
// ];

// toppings = [
//     {name: 'Crumbed peanuts', price: 2},
//     {name: 'Caramal dip', price: 2},
//     {name: 'Chocolate Dip', price: 2},
//     {name: 'Smarties', price: 2},
//     {name: 'Oreos', price: 2},
//     {name: 'Astros', price: 2},
// ]



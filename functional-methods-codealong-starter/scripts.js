
// this is the store data. normally we would be grabbing data from elsewhere (an external api), but this will represent the data model! 
  const totalInventory = [
    {
      title: 'Bowie Tee',
      url: 'images/bowie.jpg',
      price: 19.99,
      stock: 4,
    }, 
    {
      title: 'Don\'t Know Tee',
      url: 'images/dontevenknow.jpg',
      price: 22.50,
      stock: 8,
    }, 
    {
      title: 'Doughnut Jean Jacket',
      url: 'images/doughnut.jpg',
      price: 59.00,
      stock: 5,
    }, 
    {
      title: 'Journey Tee',
      url: 'images/journey.jpg',
      price: 22.99,
      stock: 6,
    }, 
    {
      title: 'Skeleton Jean Jacket',
      url: 'images/someurl.jpg',
      price: 30.00,
      stock: 0,
    }, 
    {
      title: 'Skeleton Hand Tee',
      url: 'images/skeleton.jpg',
      price: 30.00,
      stock: 10,
    }, 
    {
      title: 'HackerYou Hoodie',
      price: 50.00,
      stock: 4,
    }, 
  ]

  // document ready function allows page to load before running any of our scripts 
$(function(){

  // this object allows us to organize some information that we want to display conditionally depending on what currency the user selects

  const currencies = {
    usd: {
      exchange: 1,
      symbol: `$`,
      displayName: `USD`,
      flag: `🇺🇸`
    },
    cad: {
      exchange: 1.28,
      symbol: `$`,
      displayName: `CAD`,
      flag: `🇨🇦`
    },
    gbp: {
      exchange: 0.76,
      symbol: `£`,
      displayName: `GBP`,
      flag: `🇬🇧`
    }
  }

  // STEP ONE: filter the inventory so that only items with images that are also in stock are displayed

  const currentStock = totalInventory.filter(function(objectInArray){
    return objectInArray.url && objectInArray.stock;
  });

  // parameter is being returned... but why?
  // 1. currentStock = filtered totalInventory
  // 2. .filter will go through EACH OBJECT in your totalInventory 
  // 3. Each object in your array = objectInArray
  // 4. Return EACH OBJECT IN YOUR ARRAY (ie. objectInArray) that has an image AND stock above 0

  console.log(currentStock);

  // STEP TWO: write a function that displays inventory on the page in the correct pricing. HINT: What kind of information (paramaters) does this function need to properly display all of our information?  

  // 1. Create a function
  // 2. Go through each item in the current stock array
  // 3. Create li's, <h2> title, <img>, <p> (price)
  // 4. Append all that to the ul with the class of inventory

  function displayItems(inventory, currency){
    // As connected to displayItems(currentStock, currencies) below...
    // Inventory parameter will pass through the stock (ie. currentStock)
    // Currently will pass through the amount with exchange rate (ie. currencies)


    // 1. your action: forEach will go through each inventory item
    // 2. each inventory item that forEach goes through will be called (item) as stated by what you name your parameter
    inventory.forEach(function(item){
      // this syntax will create an html element vs. targeting them

      const listItem = $("<li>");

      // 3. .text is looking through EACH INDIVIDUAL ITEM in your inventory (item) and its TITLE
      // 4. return this as a text item
      const title = $("<h2>").text(item.title);
      // **We are creating text, hence why .text
      // NOT .html bc html already exists!
      // NOT .append bc that would add it to whatever already exists on the dom

      // 5. we are creating a src, and throwing in each url into it (ie. <img src="item.jpg")
      const image = $("<img>").attr("src", item.url).attr("alt", item.title);

      // 6. Adding .toFixed(2) will give TWO DECIMAL POINTS for your value
      const price = $("<p>").text((item.price * currency.exchange).toFixed(2));


      console.log((item.price * currency.exchange).toFixed(2));


      // 7. Append title, image, and price to the li

      listItem.append(title, image, price)
      // <li>
        // <h2>
        // <img>
        // <p>

      // 8. Append all that to the ul with the class of inventory

      $(".inventory").append(listItem)
      // <ul class="inventory">
        // <li>
          // <h2>
          // <img>
          // <p>



    })
  }
  
  // STEP THREE: display items on the page passing in USD as defualt

  displayItems(currentStock, currencies.usd);
  // ** displayed on page


  // STEP FOUR: add an event listener that will notice when a user clicks on a currency button, find out which currency they have selected, and call our display items method again. Don't forget to update the navigation, too! 

  $("button").on("click", function(){

    // 1. GRAB THE VALUE IN THE CLICKED BUTTON ID ATTRIBUTE
    const nationalCurrency = $(this).attr("id");
    // ** This will log out the currency of what you are clicking!
    
    // 2. CLEAR OUT THE EXISTING HTML
    $(".inventory").empty();
    // $(".inventory").html("") also works!

    // 3. THEN IMMEDIATELY REPLACE THE INVENTORY WITH THE USER-SELECTED PRICING
    displayItems(currentStock, currencies[nationalCurrency])
    // ** displayed after clicking

    // 4. UPDATE THE NAV TO REFLECT CHOSEN CURRENCY
    $("#flag").text(currencies[nationalCurrency].flag)

    // 5. UPDATE THE CURRENCY TO REFLECT CHOSEN CURRENCY

    $("#currency").text(currencies[nationalCurrency].displayName)

  })


});
//  //1. API Priduct Analyzer

// fetch("https://fakestoreapi.com/products")

// .then(responce => responce.json())
// .then(productsApi => {
//     // 1, Display All Products
//     productsApi.forEach(product => 
//         { 
//             console.log("Title:", product.title);
//             console.log("Price:", product.price);
//             console.log("Category:", product.category);
//     });

//     // 2. map() - title and price only
//     let titleAndPrice = productsApi.map(product => ({
//         title: product.title,
//         price: product.price
//     }));
//     console.log("Title and Price:", titleAndPrice);

//     // 3. Filter() - price greater than $100
//     let above100 = productsApi.filter(product => product.price > 100);
//     console.log("Product above $100:", above100);

//     // 4. find() - first electronics product
//     let electronicsProduct = productsApi.find(product => 
//         product.category === "electronics");
//         console.log("First Electronics Product:", electronicsProduct);

//      // 5. reduce() - total price 
//      let totalPrice = productsApi.reduce((total, product) => total + product.price, 0);
//      console.log("Total Price:", totalPrice);

//      // 6. sort() - highest price to lowest
//      let highToLow = productsApi.slice().sort((a, b) => b.price - a.price);
//      console.log("Price High to Low:", highToLow);
    
//     })

//     // 7. Handle API errors
//     .catch(error => {
//         console.log("API Error:", error);
//     }) 

//     // 8. Completion message
//     .finally(() => {
//         console.log("API Product Analysis Completed");
//     });

// //2. Task 2 - Product Category Dashboard
// function dispalyDashboard(products) {
//     // 1. Total Products 
//     let totalProducts = products.length;

//     // 2. Category counts using filter()
//     let  electronics = products.filter(product => 
//         product.category === "electronics").length;
//         let jewelery = products.filter(product => 
//             product.category === "jewelery").length;
//         let mensClothing = products.filter(product => 
//             product.category === "men's clothing").length;
//         let womensClothing = products.filter(product => 
//             product.category === "women's clothing").length;
        
//     // 3. Prices using map()
//     let prices = products.map(product => product.price);

//     // 4. Total price using reduce()
//     let totalPrice = prices.reduce((total, price) => total + price, 0);

//     // 5. Sort prices form low to high
//     let sortedPrices = prices.slice().sort((a, b) => a - b);
//     let lowestPrice = sortedPrices[0];
//     let highestPrice = sortedPrices[sortedPrices.length - 1];


//     // 6. Average price
//     let averagePrice = totalPrice / totalProducts;

//     // 7. Dashboard
//     console.log(`==== PRODUCT DASHBOARD ====
//         Total Products: ${totalProducts}
//         Electronics: ${electronics}
//         Jewelery: ${jewelery}
//         Men's Clothing: ${mensClothing}
//         Women's Clothing: ${womensClothing}
//         Highest Price: ${highestPrice}
//         Lowest Price: ${lowestPrice}
//         Average Price: ${averagePrice.toFixed(2)}
//         `);
//     } 

//     // Fetch API
//     fetch("https://fakestoreapi.com/products")
//     .then(responce => responce.json())
//          .then(product => {
//             dispalyDashboard(product);
//          })
//          .catch(error => {
//             console.log("API Error:", error);
//          });

// //3. User & Post API
// // 1. Fetch users
// fetch("https://jsonplaceholder.typicode.com/users")
//    .then(responce => responce.json())
//    .then(users => {

//     // 2. Display all user names
//     console.log("All User Names:");
//     users.map(user => {
//         console.log(user.name);
//     });

//     // 3. Dispaly user name + email
//     console.log("User Name + Email:");
//     users.map(user => {
//         console.log(user.name + " - " + user.email);
//     });

//     // 4. Find user with ID 5
//     let user5 = users.find(user => user.id === 5);
//     console.log("User with ID 5:", user5);

//     // 5. Filter users from a particular city
//     let cityUsers = users.filter(user => user.address.city === "Gwenborough");
//     console.log("User from Gwenborough:", cityUsers);

    
//     // 6. Fetch posts
//     return fetch("https://jsonplaceholder.typicode.com/posts");
//    })
//      .then(responce => responce.json())
//      .then(posts => {

//         // 7. Dispaly posts written by user ID 1
//         let user1Posts = posts.filter(post => post.userId === 1);

//         console.log("Posts by User ID 1:", user1Posts);


//         // 8. Count posts created by user ID 1
//         console.log("Post Count by User ID 1:", user1Posts.length);


//         // 9. Find first post with more than 50 characters in title
//         let longTitlePost = posts.find(post => post.title.length > 50);

//         console.log("First Post with Title > 50 Characters:", longTitlePost);
//      })
//      .catch(error => {
//         console.log("API Error:", error);
//      });


// //4. API + Search
// function searchProducts(products, category, maxPrice) {
//     let filteredProducts = products.filter(product => product. category === category
//         && product.price <= maxPrice);
//         console.log("Matching Products:", filteredProducts);
// }
//     let category = prompt("Enter product category:");
//     let maxPrice = Number(prompt("Enter maximum price:"));
//     fetch("https://fakestoreapi.com/products")
//        .then(responce => responce.json())
//        .then(products => {
//         searchProducts(products, category, maxPrice);
//        })
//        .catch(error => {
//         console.log("API Error:", error);
//        });

// //5. API Shopping Cart
// function createCart(products) {
//     // 1. Display available products
//     console.log("==== AVAILABLE PRODUCTS ====");
//     products.map(product => {
//         console.log(
//             "ID:", product.id,
//             "Title:", product.title,
//             "Price: $", + product.price 
//         );
//     });

//     // 2. Select products using their IDs
//     let selectedIds = prompt("Enter product IDs separated by comma:");
//     let ids = selectedIds.split(",").map(id => Number(id.trim()));


//     // 3. Add selected products to cart array
//     let cartProducts = products.filter(product => ids.includes(product.id));
//     console.log("==== CART ====");
//     cartProducts.map((product, index) => {
//         console.log("product " + (index + 1) + " : ",
//         product.title, "Price: $" + product.price);
//     });

//     // 4. Calculate cart total using reduce()
//     let cartTotal = cartProducts.reduce((total, product) => total + product.price, 0);


//     // 5. Apply discount
//     let discount = 0;
//     if (cartTotal > 200) {
//         discount = 20;
//     } else if (cartTotal > 100) {
//         discount = 10;
//     }
//     let discountAmount = cartTotal * discount / 100;


//     // 6. Display final amount
//     let finalAmount = cartTotal - discountAmount;
//     console.log("Total: $", + cartTotal.toFixed(2));
//     console.log("Discount:", discount + "%");
//     console.log("Final Amount: $", + finalAmount.toFixed(2));
// }
//     fetch("https://fakestoreapi.com/products")
//       .then(responce => responce.json())
//       .then(products => {
//         createCart(products);
//       })
//       .catch(error => {
//         console.log("API Error:", error);
//       });

// //6. FakeStore Product Report
// let apiLink = "https://fakestoreapi.com/products";
// fetch(apiLink)
//   .then(responce => responce.json())
//   .then(products => {
//     console.log("========== PRODUCT REPORT ==========");
//     console.log("Total Products:", products.length);
//     // 1 % 3. Dispaly all products using forEach()
//     console.log("All Products:");
//     products.forEach(product => {
//         console.log(
//             "Title:", product.title,
//             "Price: $" + product.price,
//             "Category:", product.category 
//         );
//     });

//     // 4. Create product names array using map()
//     let productNames = products.map(product => product.title);
//     console.log("Product Names:", productNames);

//     // 5. Filter products above $100
//     let expensiveProducts = products.filter(product => product.price > 100);
//     console.log("Products Above $100", expensiveProducts);

//     // 6. Find first electronics product
//     let electronicsProduct = products.find(product => product.category === "electronics");
//     console.log("Electronics Product:", electronicsProduct);

//     // 7. Calculate total price using reduce()
//     let totalPrice = products.reduce((total, product) => total + product.price, 0);
//     console.log("Total Product value: $" + totalPrice.toFixed(2));

//     // 8. Check products using some() and every()
//     let anyAbove500 = products.some(product => product.price > 500);
//     let allAbove1 = products.every(product => product.price > 1);
//     console.log("Any Product Above $500:", anyAbove500);
//     console.log("All Products Above $1:", allAbove1);


//     // 9. sort highest price to lowest
//     let sortedProducts = products.slice().sort((a, b) => b.price - a.price);
//     console.log("Highest → Lowest:", sortedProducts);
//   })
//   .catch(error => {
//     console.log("API Error:", error);
//   })
//   .finally(() => {
//     console.log("Product Report Completed");
//   });
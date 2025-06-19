// string concatenation for the baseurl
// baseurl+'/products'

// const baseUrl = "http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1";
// const productUrl = baseUrl + '/products';
let productList; // new varible 
let htmlProductList = document.getElementById("productList"); // in html has this id 

// Fetch Method Call
// Override 1
// By Default method for fetch is GET


// fetch("https://fakestoreapi.com/products")
//     .then(response => response.json()) // success  ask dara from API turn it to json save it in productList 
//     .then(data => productList = data)
//     .catch(error => console.log(error))

async function fetchProducts() {
    try {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        productList = data; // ما يحتاج await هنا، لأنه data خلاص جاية من await فوق
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}


// show data and show them as cards using bootstrap 


async function displayProducts() {
    await fetchProducts();
    htmlProductList.innerHTML = "";
    productList.forEach(product => {
        htmlProductList.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${product.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>`
    })
}

displayProducts(); // show data 

/*

let product = {  //create new product 
    title: "Product",
    price: 10,
    description: "product description",
    image: "https://fakestoreapi.com/products/1",
    category: "product category"
};

fetch("https://fakestoreapi.com/products/create", {  //send it to the sever 
    method: "POST", // use POST 
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
})
    .then(response => response.json()) // success then send the, productList
    .then(data => productList = data)
    .catch(error => console.log(error)); // wrong then catch the error 

    */ 

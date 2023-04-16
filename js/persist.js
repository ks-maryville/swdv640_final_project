import {data} from "./data.js";

// Finds the product with the ID of the clicked item and stores it in local storage before going to the product page.
export const storeProduct = (e) => {
    const id = e.target.dataset.productid;
    const filtered = data.filter(product => product.id === parseInt(id));
    localStorage.setItem("selected", JSON.stringify(filtered[0]));
}
// Finds all products with the selected category and stores them in local storage before going to the category page.
export const storeCategory = (e)=>{
    const category = e.target.dataset.category;
    const filtered = data.filter(product=>product.gender === category)
    localStorage.setItem("selectedCategory", JSON.stringify(filtered))
}
import {data} from "./data.js";

export const storeProduct = (e) => {
    console.log("product stored");
    const id = e.target.dataset.productid;
    const filtered = data.filter(product => product.id === parseInt(id));
    localStorage.setItem("selected", JSON.stringify(filtered[0]));
}
export const storeCategory = (e)=>{
    const category = e.target.dataset.category;
    const filtered = data.filter(product=>product.gender === category)
    localStorage.setItem("selectedCategory", JSON.stringify(filtered))
}
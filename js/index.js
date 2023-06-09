import {data} from './data.js';
import {storeProduct, storeCategory} from "./persist.js";

window.addEventListener('DOMContentLoaded', async () => {
    const index = {
        element: {
            products: document.getElementsByClassName("product"),
            categoryLinks: document.getElementsByClassName("category-link"),
            featuredContainer: document.querySelector("#render_featured"),
            topContainer: document.querySelector("#render_top")
        },
        template: {
            featured: document.querySelector('#featuredProducts').innerHTML,
            top: document.querySelector('#topSellers').innerHTML
        }
    }

    Mustache.parse(index.template.featured);
    Mustache.parse(index.template.top);

    const indexData = {
        featured: data.slice(0, 5),
        top: data.slice(5, 10)
    }

    const featured = Mustache.render(index.template.featured, indexData);
    const top = Mustache.render(index.template.top, indexData);

    if (index.element.featuredContainer) {
        index.element.featuredContainer.innerHTML = featured;
    }


    document.querySelector('#render_top').innerHTML = top;


    const product = document.querySelector(".product");
    console.log(product);

    Array.from(index.element.products).forEach(item=>item.addEventListener('click', (e)=>storeProduct(e)));

    Array.from(index.element.categoryLinks).forEach(item=>item.addEventListener('click', (e)=>storeCategory(e)))

})



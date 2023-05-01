window.addEventListener('DOMContentLoaded', ()=>{
    const categoryPage = {
        element: {
            shoeContainer: document.querySelector('.shoeContainer'),
            categoryHeader: document.querySelector('.categoryHeader'),
            shoeList: document.getElementsByClassName('product')
        },
        template: {
            shoes: document.querySelector("#shoeList").innerHTML,

        }
    }
    const categoryPageData = {
        data: localStorage.getItem("selectedCategory") && JSON.parse(localStorage.getItem('selectedCategory'))
    }

    const renderData = Mustache.render(categoryPage.template.shoes, categoryPageData);

    if(categoryPage.element.shoeContainer){
        categoryPage.element.shoeContainer.innerHTML = renderData;
    }
    let categoryHeaderText = categoryPageData.data[0].gender.split('');
    categoryHeaderText[0] = categoryHeaderText[0].toUpperCase();
    categoryHeaderText = categoryHeaderText.join('')
    // categoryHeaderText.join("")
    console.log(categoryHeaderText);
    categoryPage.element.categoryHeader.innerHTML = `${categoryHeaderText} Shoes`


})
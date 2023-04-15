
window.addEventListener('DOMContentLoaded', async ()=>{
    const testString = "this is a test";

    const index = {
        element: {
            testButton: document.querySelector('.test'),
            contentRoot: document.querySelector('.content'),
            appRoot: document.querySelector('.app')
        }

    }

   const data = await fetch('./data.json')
        .then((response)=>response.json())

    const updateContent = () => {
        index.element.contentRoot.innerHTML = 'Content has been updated!'
    }
    index.element.testButton.addEventListener('click', updateContent);

    const featuredData = {
        featured: data.splice(0,5),
        top: data.splice(5,10)
    }
    console.log(featuredData);
    const topSellers = {
        top: data.splice(5,10)
    }



    function renderIndex() {
        fetch('./js/index.mustache')
            .then((response) => response.text())
            .then((template) => {
                const rendered = Mustache.render(template, featuredData);
                index.element.contentRoot.innerHTML = rendered;
            })
    }

    renderIndex();
})



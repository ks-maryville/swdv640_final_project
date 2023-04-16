
export const elements = {
    index: {
        element: {products: document.getElementsByClassName("product"),
            categoryLinks: document.getElementsByClassName("category-link"),
            featuredContainer: document.querySelector("#render_featured"),
            topContainer: document.querySelector("#render_top")},
        template: {featured: document.querySelector('#featuredProducts').innerHTML,
            top: document.querySelector('#topSellers').innerHTML}
    },
    shoePage: {
            element: {
                leftInfo: document.querySelector('.infoLeft'),
                rightInfo: document.querySelector('.infoRight')
            },
            template: {
                infoLeft: document.querySelector("#infoLeft").innerHTML,
                infoRight: document.querySelector("#infoRight").innerHTML
            }
    },
    categoryPage: {
        element: {},
        template: {}
    }
}
export const index = {
    element: {products: document.getElementsByClassName("product"),
        categoryLinks: document.getElementsByClassName("category-link"),
        featuredContainer: document.querySelector("#render_featured"),
        topContainer: document.querySelector("#render_top")},
    template: {featured: document.querySelector('#featuredProducts').innerHTML,
        top: document.querySelector('#topSellers').innerHTML}
}
export const shoePage = {
    element: {
        leftInfo: document.querySelector('.infoLeft'),
        rightInfo: document.querySelector('.infoRight')
    },
    template: {
        infoLeft: document.querySelector("#infoLeft").innerHTML,
        infoRight: document.querySelector("#infoRight").innerHTML
    }
}
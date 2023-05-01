window.addEventListener('DOMContentLoaded', ()=>{

    const shoePage = {
        element: {
            leftInfo: document.querySelector('.infoLeft'),
            rightInfo: document.querySelector('.infoRight')
        },
        template: {
            infoLeft: document.querySelector("#infoLeft").innerHTML,
            infoRight: document.querySelector("#infoRight").innerHTML
        }
    }

    const shoePageData = {
        data: localStorage.getItem("selected") && JSON.parse(localStorage.getItem('selected'))
    }
    const leftInfo = Mustache.render(shoePage.template.infoLeft, shoePageData);
    const rightInfo = Mustache.render(shoePage.template.infoRight, shoePageData)
    if(shoePage.element.leftInfo){
        shoePage.element.leftInfo.innerHTML = leftInfo;
    }
    if(shoePage.element.rightInfo){
        shoePage.element.rightInfo.innerHTML = rightInfo;
    }
})
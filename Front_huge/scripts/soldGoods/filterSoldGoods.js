import { SERVER } from "../server.js"

addEventListener("submit", () => {
    fetch(SERVER + "/sold_goods/filter" + "?" + "goods=" + goods_select + "city=" + city_select).then(function (response) {
        response.json().then(resp => {
            console.log(resp)

        })
    })
})

// === Код на DropDownMenu в фільтрі та пошук в меню ====


function filtrOpen(selectbox, selectoption, sovalue, optionsearch, Options, optionslist) {

    const selectBox = document.querySelector(selectbox)
    const selectOption = document.querySelector(selectoption)
    const soValue = document.querySelector(sovalue)
    const optionSearch = document.querySelector(optionsearch)
    const options = document.querySelector(Options)
    const optionsList = document.querySelectorAll(optionslist)

    //  === Вікдриття DropDownMenu

    selectOption.addEventListener('click', function () {
        selectBox.classList.toggle('active');
    });


    // === Вставлення вибраного елементу в селект ===

    optionsList.forEach(function (optionsListSingle) {
        optionsListSingle.addEventListener("click", function () {
            let text = this.textContent;
            console.log(soValue)
            soValue.value = text;
            selectBox.classList.remove("active");
        })
    });

    // === Пошук елемента ====

    optionSearch.addEventListener('keyup', function () {
        var filter, li, i, textValue;
        filter = optionSearch.value.toUpperCase();
        li = options.getElementsByTagName('li');
        for (i = 0; i < li.length; i++) {
           let liCount = li[i];
            textValue = liCount.textContent || liCount.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';

            }
        }
    })
}
filtrOpen('.one', '.one2', '#soValue', '#optionSearch', '.options', '.one4 li')
filtrOpen('.two', '.two2', '#soValue-2', '#optionSearch-2', '.two4', '.two4 li')

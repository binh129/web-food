function mylist(obj,array,content) {
    for(var i = 0; i < array.slice(0,3).length; i++) {
        if(obj) {
            const item = document.createElement("DIV")
            item.classList.add("item-product","col","col-xl-4","col-lg-4","col-sm-4","col-6")
            item.innerHTML = `
                <a onclick="getlocalPRD(${array[i].id})" href="./pages/detailsproduct/detail.html">
                    <div><img src='${array[i].image}' alt="/"></div>
                    <div class="infor-restaurant">
                        <h4>${array[i].name}</h4>
                        <p>${array[i].adress}</p>
                        <span>${content}</span>
                    </div>
                </a>
            `;
            obj.appendChild(item)
        }
    }
}

const salelist = document.getElementById("list-sale-prd");
const goodlist = document.getElementById("list-good-prd");
mylist(salelist, listsale, "Đang ưu đãi !!")
mylist(goodlist, listgood, "Đánh giá 5 sao")


function viewlist(n) {
    localStorage.setItem("mytype", n)
}

function getlocalPRD(n) {
    localStorage.setItem("detailsPRD", n)
}

const search = document.getElementById("search-prd"),
      button = document.getElementById("search-action");

button.addEventListener("click", function() {
    localStorage.setItem("search", search.value)
})

localStorage.removeItem("mytype");
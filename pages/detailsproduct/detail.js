var prd = localStorage.getItem("detailsPRD");
const details = document.getElementById("detail");

HTMLElement.prototype.empty = function() {
    while (this.firstChild) {                                       
        this.removeChild(this.firstChild);
    }
} /// Một hàm xóa các phần tử ơ DOM

const lists = document.getElementById("cart");
let startarray = [];
let cartarray =  JSON.parse(localStorage.getItem("product")) ? JSON.parse(localStorage.getItem("product")) : []; 
// Sử dụng toán tử 3 ngôi để lấy dữ liệu trên localStorage

if(details) { // in ra Chi tiết của sản phẩm
    const item = document.createElement("DIV");
    const product = data.find(item => {
        return item.id === prd;
    });
    item.classList.add("my-product")
    item.innerHTML = `
        <div class="product-img">
            <img src="${product.image}" alt="/" />
        </div>
        <div class="product-infor">
            <span class="product-type">${product.type}</span>
            <h1>${product.name}</h1>
            <p><span>Địa chỉ:</span> ${product.adress}</p>
            <ul>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
                <li class="rate"><span><i class="fas fa-star"></i></span></li>
            </ul>
            <p>(Được đánh giá bởi người dùng của Amazon)</p>
            <h2>Giá:<span>${product.price}.000đ</span></h2>
            
            <div class="derection">
                <ul>
                    <li class="${cartarray && cartarray.includes(product.id) ? 'hidden-cus':'block-cus'}"><button onclick="addtocart()" class="add-cart">Thêm vào giỏ hàng</button></li>
                    <li class="${!cartarray || !cartarray.includes(product.id) ? 'hidden-cus':'block-cus'}"><button class="haveincart" id='haveIncart'>Đã có trong giỏ hàng <span><i class="fas fa-check"></i></span></button></li>
                </ul>
            </div> 
        </div>
    `;
    details.appendChild(item);
}


function addtocart() { /// Thêm vào giỏ hàng
    // localStorage.setItem("product", JSON.stringify(startarray)) // Tạo một mảng rỗng trên localStorage
    const product = data.find(item => {
        return item.id === prd;
    });
    cartarray.push(product.id) 
    let filterarray = [...new Set(cartarray)] // Lọc những sản phẩm giống nhau
    localStorage.setItem(`product`, JSON.stringify(filterarray)) // Đẩy lên localStorage để lưu trữ
    location.reload(); // load window
    render();
}

function removeInCard(id) {
    let localarray = JSON.parse(localStorage.getItem("product")) ? JSON.parse(localStorage.getItem("product")) : [];
    let newArr = localarray.filter(item => item !== id);
    localStorage.setItem(`product`, JSON.stringify(newArr))
    window.location.reload(true);
}

render();

function render() {
    let localarray = localStorage.getItem("product") 
    let myarray = eval(localarray).join(",").split`,`.map(x=>+x)
    lists.empty();
    PrdinCart(data, myarray) // in ra giao diện
}

function PrdinCart(array,index) { // in sản phẩm trong giỏ hàng
    for(var i = 0; i < array.length; i++) {
        for(var j = 0; j < index.length; j++) {
            const lists = document.getElementById("cart")
            if(array[i].id == index[j]) {
                const item = document.createElement("DIV")
                item.classList.add("product-cart")
                item.innerHTML = `
                    <div class="cart-image">
                        <img src="${array[i].image}" alt="/">
                    </div>
                    <div class="cart-infor">
                        <div>
                            <h4>${array[i].name}</h4>
                            <span onClick="removeInCard(${array[i].id})"><i class="far fa-trash-alt"></i></span>
                        </div>
                        <ul>
                            <li class="cart-count">
                                <span>SL:</span>
                                <input type="number" name="count" id="count" placeholder="1" value="1" min="1" max="10">
                            </li>
                            <li class="cart-price">
                            <span>Giá: </span><span> ${array[i].price}.000đ</span>
                            </li>
                        </ul>
                    </div>
                `;
                lists.appendChild(item)
            }
        }
    }
}


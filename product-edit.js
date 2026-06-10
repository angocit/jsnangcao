import { DisPlayError } from "./module.js"
// B1 Lấy id từ url
const params = new URLSearchParams(location.search)
const id = params.get("id")
// console.log(id);
const productname = document.getElementById("product-name")
const productsku = document.getElementById("product-sku")
const productcategory = document.getElementById("product-category")
const productprice = document.getElementById("product-price")
const productstock = document.getElementById("product-stock")
const productimage = document.getElementById("product-image")
// Truy cập form
const productform = document.getElementById("edit-product-form")
// B2 Lấy thông tin chi tiết sản phẩm
const getProductByID = async(productid)=>{
    try {
        const res = await fetch(`http://localhost:3000/products/${productid}`)
        if (!res.ok) throw await res.json()
        const data = await res.json()
        console.log(data);
        // B3: Fill data vào input
        productname.value = data.name
        productsku.value = data.sku
        productcategory.value = data.category
        productprice.value = data.price
        productstock.value = data.inStock
        productimage.value = data.image
    } catch (error) {
        console.log(error);
        // alert("Không có thông tin sản phẩm")
    }
}
// Gọi hàm lấy chi tiết
getProductByID(id)
// Lắng nghe sự kiện submit
productform.addEventListener("submit",async(e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    const variant = 1
    const status = (productstock.value==0)?'out_stock':(productstock.value<5)?'low_stock':'active'
    // let status = 'out_stock'
    // if (productstock.value>0 &&productstock.value<5){
    //     status = 'low_stock'
    // }
    // if (productstock.value>4){
    //     status = 'active'
    // }
    // Check validate trước
        if (productname.value.trim().length<6){
            // alert("Tên không để trống và >5 kí tự")
            DisPlayError(productname,"Tên không để trống và > 5 kí tự")        
            return // Dừng chương trình
        }
        if (productsku.value.trim().length==0){
            // alert("Mã sản phẩm không để trống")
            DisPlayError(productsku,"Mã sản phẩm không để trống") 
            productsku.focus() // Đưa con trỏ vào ô input mã sản phẩm
            return // Dừng chương trình
        }
    const product = {
        "name": productname.value,
        "price": productprice.value,
        "inStock": productstock.value,
        "variant": variant,
        "category": productcategory.value,
        "sku": productsku.value,
        "status": status,
        "image": productimage.value
        }
    try {
        const res = await fetch(`http://localhost:3000/product/${id}`,{
            method:'PUT',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(product)
        })
        if (!res.ok) throw await res.json()
        window.location = "product.html"
        alert("Cập nhật thành công")        
    } catch (error) {
        console.log(error);
        alert("Cập nhật thất bại")
    }
})
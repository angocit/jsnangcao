const productname = document.getElementById("product-name")
const productsku = document.getElementById("product-sku")
const productcategory = document.getElementById("product-category")
const productprice = document.getElementById("product-price")
const productstock = document.getElementById("product-stock")
const productimage = document.getElementById("product-image")
// Truy cập form
const productform = document.getElementById("add-product-form")
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
        alert("Tên không để trống và >5 kí tự")
        productname.focus() // Đưa con trỏ vào ô input tên sản phẩm
        return // Dừng chương trình
    }
    if (productsku.value.trim().length==0){
        alert("Mã sản phẩm không để trống")
        productsku.focus() // Đưa con trỏ vào ô input mã sản phẩm
        return // Dừng chương trình
    }
    if (productcategory.value.trim().length==0){
        alert("Danh mục không để trống")
        productcategory.focus() // Đưa con trỏ vào ô Danh mục
        return // Dừng chương trình
    }
    if (productprice.value.trim().length==0||isNaN(productprice.value)||productprice.value<=0){
        alert("Giá phải là số và > 0")
        productprice.focus() // Đưa con trỏ vào ô Giá
        return // Dừng chương trình
    }
    if (productstock.value.trim().length==0||isNaN(productstock.value)||productstock.value<=0){
        alert("Tồn kho phải là số và > 0")
        productstock.focus() // Đưa con trỏ vào ô Giá
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
        const res = await fetch(`http://localhost:3000/products`,{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(product)
        })
        if (!res.ok) throw "Lỗi"
        window.location = "product.html"
        alert("Thêm mới thành công")        
    } catch (error) {
        alert(error)
    }
})
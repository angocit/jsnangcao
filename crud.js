import CRUD from './lession8.js'
const crud = new CRUD("http://localhost:3000/products")
const frmproduct = document.getElementById("frmproduct")
frmproduct.addEventListener('submit',async (e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    // Đọc dữ liệu từ input
    const name = document.querySelector("#frmproduct input[name=name]")
    const image = document.querySelector("#frmproduct input[name=image]")
    const price = document.querySelector("#frmproduct input[name=price]")
    const data = {name:name.value,image:image.value,price:price.value}
    // Thực hiện call API
    if (name.value.trim()=='') {
        alert("Tên không để trống")
        name.focus()
        return;
    }
    if (image.value.trim()=='') {
        alert("Ảnh không để trống")
         image.focus()
        return;
    }
    if (isNaN(price.value)||price.value.trim()==''||(Number(price.value)<0)) {
        alert("Giá phải là số và >0")
        price.focus()
        return;
    }
    try {
        const newproduct = await crud.AddProduct(data)
        alert("Thêm mới thành công")
    } catch (error) {
        alert("Thêm thất bại")
    }    

    // console.log(product);    
})

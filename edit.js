// Các bước 
// 1. Lấy được ID từ URL 
// 2. Call API để lấy thông tin sản phẩm theo id 
// 3. Fill data vào form 
// 4. Bắt sự kiện submit form để cập nhật phần sửa 
// B1 
const params = new URLSearchParams(location.search)
const id = params.get("id")
// console.log(id);
// Bước 2
const name = document.querySelector("#frmproduct input[name=name]")
const image = document.querySelector("#frmproduct input[name=image]")
const price = document.querySelector("#frmproduct input[name=price]")
const GetProductById = async ()=>{
    try {
        const res = await fetch(`http://localhost:3000/products/${id}`)
        const {name:namevalue,image:imagevalue,price:pricevalue} = await res.json()
        // console.log(data);
        // fill dữ liệu lấy được vào form 
        console.log(image);
        
        name.value = namevalue
        image.value = imagevalue 
        price.value = pricevalue
    } catch (error) {
        
    }
} 
GetProductById()
const frmproduct = document.getElementById("frmproduct")
frmproduct.addEventListener('submit',async (e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
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
    const response = await fetch(`http://localhost:3000/products/${id}`,{
        method:'PUT',
        headers: {'Content-type':'Application/json'},
        body: JSON.stringify(data)
    })
    const product = await response.json()
    window.location = "list.html"
    alert("Cập nhật thành công")    
    // console.log(product);    
})
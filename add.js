const productfrm = document.getElementById("productfrm")
// Lắng nghe sự kiện submit form
productfrm.addEventListener('submit',async (e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    // Truy cập ô input để lấy dữ liệu
    const name = document.querySelector("#productfrm input[name=name]")
    const image = document.querySelector("#productfrm input[name=image]")
    const price = document.querySelector("#productfrm input[name=price]")
    const data = {name:name.value,image:image.value,price:price.value}
    if (name.value.trim()==''){
        alert("Tên không để trống")
        name.focus()
        return;
    }
    if (image.value.trim()==''){
        alert("Ảnh không để trống")
        image.focus()
        return;
    }
    if (price.value.trim()==''||isNaN(price.value)||price.value<0){
        alert("Giá phải là số và không âm")
        price.focus()
        return;
    }
    // Gọi API để thêm
    try {
        await fetch("http://localhost:3000/products",{
        method:'POST',
        headers:{'Content-type':'Application/json'},
        body:JSON.stringify(data)
        })
        alert("Thêm mới thành công")
    } catch (error) {
        alert("Thêm thất bại")
    }
    
})
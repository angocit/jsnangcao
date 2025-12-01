const RenderProduct = (productArr)=>{
    // Truy cập vào tbody
    const tbody = document.querySelector("tbody")
    // Duyệt mảng để hiển thị
    tbody.innerHTML = productArr.map(({id,name,image,price},index)=>{
        return `
            <tr>
                <td>${index+1}</td>
                <td>${name}</td>
                <td><img width="90" src="${image}"/></td>
                <td>${price}</td>
                <td>
                    <a href="edit.html?id=${id}">Sửa</a>
                    <button onclick="handleDelete(${id})">Xóa</button>
                </td>
            </tr>
        `
    }).join("")
}
const GetAllProduct = async()=>{
    try {
        const response = await fetch("http://localhost:3000/products")
        console.log(response);
        if (!response.ok) throw "Lỗi"
        const products= await response.json()
        RenderProduct(products)
    } catch (error) {
        console.log(error);        
    }
}
GetAllProduct()
const handleDelete = async (id)=>{
    if (!confirm("Bạn chắc chứ?")) return;
    try {
       const res = await fetch(`http://localhost:3000/products/${id}`,{method:'DELETE'})
    if (!res.ok) throw "Lỗi"
       alert("Xóa thành công")
    } catch (error) {
        alert("Xóa thất bại")
    }
}
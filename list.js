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
                    <a>Sửa</a>
                    <button onclick="handleDelete(${id})">Xóa</button>
                </td>
            </tr>
        `
    }).join("")
}
const GetAllProduct = async()=>{
    const response = await fetch("http://localhost:3000/products")
    const products= await response.json()
    RenderProduct(products)
}
GetAllProduct()
const handleDelete = async (id)=>{
    if (!confirm("Bạn chắc chứ?")) return;
    try {
        await fetch(`http://localhost:3000/products/${id}`,{method:'DELETE'})
        alert("Xóa thành công")
    } catch (error) {
        alert("Xóa thất bại")
    }
}
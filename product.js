// Call API là tác vụ bất đồng bộ.
const GetAllProduct = async ()=>{
    try {
        // Call API
        const res = await fetch(`http://localhost:3000/products`)
        if (!res.ok) throw "Lỗi"
        const data = await res.json()
        // console.log(data);     
        // Truy cập vào vị trí cần hiển thị
        const tbody = document.getElementById("product-table-body")
        let content = ''
        // Duyệt mảng data
        data.forEach(({id,name,inStock,category,price,status},index)=>{
            content+=`
                <tr>
                   <td>
                    <div class="flex items-center">
                        <input type="checkbox" class="w-4 h-4 text-primary-600 bg-white border-slate-300 rounded focus:ring-primary-500 focus:ring-2 cursor-pointer transition-colors hover:border-primary-400">
                    </div>
                   </td> 
                   <td>
                        ${name}
                   </td> 
                   <td>${category}</td> 
                   <td>${price}</td> 
                   <td>${inStock}</td> 
                   <td>${status}</td> 
                   <td>
                        <a href="product-edit.html?id=${id}" class="bg-blue-500 rounded text-white px-4 py-1">Sửa</a>
                        <button onclick="handleDelete('${id}')" class="bg-red-500 rounded text-white px-4 py-1">Xóa</button>
                   </td> 
                </tr>
            `
        })   
        tbody.innerHTML = content
    } catch (error) {
        console.log(error);        
    }
}
GetAllProduct()
const handleDelete = async (id)=>{
    if (!confirm("Bạn thực sự muốn xóa?")) return
    try {
        const res = await fetch(`http://localhost:3000/products/${id}`,{
            method:'DELETE'
        })
        if (!res.ok) throw "Xóa thất bại"
        alert("Xóa thành công")
    } catch (error) {
        alert(error)
    }
}
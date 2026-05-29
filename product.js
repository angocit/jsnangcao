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
        data.forEach((item,index)=>{
            content+=`
                <tr>
                   <td>
                    <div class="flex items-center">
                        <input type="checkbox" class="w-4 h-4 text-primary-600 bg-white border-slate-300 rounded focus:ring-primary-500 focus:ring-2 cursor-pointer transition-colors hover:border-primary-400">
                    </div>
                   </td> 
                   <td>
                        ${item.name}
                   </td> 
                   <td>${item.category}</td> 
                   <td>${item.price}</td> 
                   <td>${item.inStock}</td> 
                   <td>${item.status}</td> 
                   <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
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
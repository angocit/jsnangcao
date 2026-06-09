
const GetProducts = async (tbody)=>{
            try {
                const res = await fetch(`http://localhost:3000/products`)
                if (!res.ok) throw "Lỗi"
                const data = await res.json()
                let content = ``
                data.forEach(({name,image,price,id},index)=>{
                    content+=`
                        <tr class="border-b border-gray-200 hover:bg-gray-50 transition">
                            <td class="px-4 py-3 text-sm text-gray-700">${index+1}</td>
                            <td class="px-4 py-3 text-sm text-gray-700 font-medium">${name}</td>
                            <td class="px-4 py-3">
                                <img src="${image}" alt="${name}" class="w-16 h-16 object-cover rounded border" onerror="this.style.display='none'"/>
                            </td>
                            <td class="px-4 py-3 text-sm text-gray-700">${Number(price).toLocaleString()}đ</td>
                            <td class="px-4 py-3 text-center">
                                <a href="product-edit.html?id=${id}" class="bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-semibold px-3 py-1.5 rounded transition">Sửa</a>
                                <button onclick="handleDelete('${id}')" class="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded transition ml-1">Xóa</button>
                            </td>
                        </tr>
                    `
                })    
                tbody.innerHTML = content         
            } catch (error) {
                console.log(error);                
            }
}
const handleDelete = async(id)=>{
            if (!confirm("Bạn thực sự muốn xóa?")) return;
            try {
                const res = await fetch(`http://localhost:3000/products/${id}`,{
                    method:'DELETE'
                })
                if (!res.ok) throw await res.json()
                alert("Xóa thành công")
                GetProducts()
            } catch (error) {
                console.log(error);
                
            }
        }
export {handleDelete,GetProducts}
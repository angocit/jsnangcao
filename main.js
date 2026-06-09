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
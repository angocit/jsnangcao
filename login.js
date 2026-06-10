// B1 
const userform = document.getElementById("userform")
const email = document.getElementById("email")
const password = document.getElementById("password")
// B2
userform.addEventListener("submit",async(e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    // B3
    const user = {
        email: email.value,
        password: password.value
    }
    // B4
    try {
        const res = await fetch(`http://localhost:3000/login`,{
            method:'POST',
            headers: {'Content-type':'Application/json'},
            body:JSON.stringify(user)
        })
        if (!res.ok) throw await res.json()
        const data = await res.json()
        // console.log(data);
        // Lưu vào localStorage
        localStorage.setItem("token",data.accessToken)
        window.location = "product.html"        
        alert("Đăng nhập thành công")
    } catch (error) {
        alert(error)
    }
})
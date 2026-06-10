// B1 
const userform = document.getElementById("userform")
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
// B2
userform.addEventListener("submit",async(e)=>{
    e.preventDefault() // Ngăn trình duyệt chuyển hướng
    // B3
    const user = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    // B4
    try {
        const res = await fetch(`http://localhost:3000/register`,{
            method:'POST',
            headers: {'Content-type':'Application/json'},
            body:JSON.stringify(user)
        })
        if (!res.ok) throw await res.json()
        alert("Đăng ký thành công")
    } catch (error) {
        alert(error)
    }
})
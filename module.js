const DisPlayError = (elm,message)=>{
     const parent = elm.parentNode
        const span = document.createElement("span")
        // Đặt nội dung cho span
        span.innerHTML = message
        // Thiết lập màu cho span
        span.setAttribute("class","text-red-600 text-[12px]")
        // Chèn vào phần tử cha
        parent.append(span)
        elm.focus() // Đưa con trỏ vào ô input tên sản phẩm
}
export default DisPlayError
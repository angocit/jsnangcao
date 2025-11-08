const students = [
    {
        id:1,
        name:"SV 1",
        age: 20,
        address: {
            province:"Thái Nguyên",
            Ward:"Phú Lương"
        }
    },
    {
        id:2,
        name:"SV 2",
        age: 21,
        address: {
            province:"Hà Nội",
            Ward:"Cầu Giấy"
        }
    },
    {
        id:3,
        name:"SV 3",
        age: 20,
        address: null
    },
    {
        id:4,
        name:"SV 4",
        age: 20,
        address: {
            province:"Hải Phòng",
            Ward:"An Dương"
        }
    }
]
for (sinhvien of students){
    console.log(`
        Họ tên: ${sinhvien.name}
        Tỉnh: ${sinhvien.address?.province||"Không xác định"}
        `);
    
}
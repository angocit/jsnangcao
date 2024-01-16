// Map
// Các phần tử trong map sẽ có 2 giá trị
// 1- Key
// 2- Value
// 
// Khởi tạo map và set giá trị

// const map1 = new Map();
// map1.set('key1', 'value1');
// map1.set('key2', 'value 2');
// map1.set('key3', 'value 3');

// Lấy giá trị từ Map
// console.log(map1);
// console.log(map1.get(0));


// Tạo map từ mảng
// const mang = [
//     ['key1', 'Value1'],
//     ['key2', 'Value2'],
//     ['key3', 'Value3'],
//     ['key4', 'Value4']
// ];
// const set1 = new Set(mang);
// console.log(set1);
// const map2 = new Map(mang);
// console.log(map2);
// Tạo Map từ Map
// const map3 = new Map(map2);
// console.log(map3);
// Tạo map từ Set
// const map4 = new Map(set1);
// console.log(map4);
// // Kiểm tra key tồn tại trong map
// console.log(map4.has('key8'));
// //Xóa key trong map
// map4.delete('key2');
// console.log(map4);
// //Xóa toàn bộ key trong map
// map4.clear();
// console.log(map4);

// const tracnghiem = new Map();
// tracnghiem.set('cauhoi','Từ nào sau đây là tên một châu lục?');
// tracnghiem.set(1,'Việt Nam');
// tracnghiem.set(2,'Trung Quốc');
// tracnghiem.set(3,'Châu Á');
// tracnghiem.set('dapan','Châu Á');
// tracnghiem.set(true,'Bạn đã trả lời chính xác');
// tracnghiem.set(false,'Câu trả lời chưa chính xác');

// console.log(tracnghiem.get('cauhoi'));
// console.log(`1. ${tracnghiem.get(1)}`);
// console.log(`2. ${tracnghiem.get(2)}`);
// console.log(`3. ${tracnghiem.get(3)}`);
// const dapan = Number(prompt('Nhập đáp án'));
// console.log(tracnghiem.get(tracnghiem.get('dapan')==tracnghiem.get(dapan)));

// Default Parameter
// const tinhtong = (a,b=5)=>{
//    return a+b;
// }
// Gọi hàm trong hàm (Callback)
// const PrintResult = (a,b,fn)=>{
//     console.log(`Tổng 2 số là: ${fn(a,b)}`);
// }
// PrintResult(10,5,tinhtong);

// Hàm return hàm
// const Demo = ()=>{
//     console.log(`Log hàm số 1`);
//     return (a)=>{
//         console.log(`Log hàm số 2 ${a}`);
//         return (b)=>{
//             console.log(`Log hàm số 3 ${b}`);
//         }
//     }
// }
// Demo()(7)(9);
// (Immediately Invoked Function Expressions (IIFE))
// (demo = ()=>{
//     console.log(`Đây là demo`);
// })();
// demo();

// const mang = [7,6,4,4,34,4];
// for (let item of mang) {
//     console.log(item);
// }
// for (let i=0; i<mang.length;i++) {
//     console.log(mang[i]);
// }
// Map
// mang.map((value,index)=>{
//     console.log(value,index);
// });
// forEach
// mang.forEach((value,index)=>{
//     console.log(value,index);
//     });
// Filter 
// const mangb = mang.filter(value=>{
//     return value>6;
// });
// console.log(mang);
// console.log(mangb);
// const objarr = [
//     {a:7,b:9},
//     {a:3,b:10},
//     {a:4,b:34},
//     {a:5,b:23},
//     {a:7,b:11}
// ];
// const newobj = objarr.filter(({a,b})=>{
//     return (a<7)&&(b>10);
// });
// console.log(newobj);

const mang = [6,7,4,2];
const tong = mang.reduce((result,value)=>{
    if (value%2==0){
        result+=value;
    }
    return result;
});
console.log(tong);
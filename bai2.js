//Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng (space) ở đầu và cuối
//câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác
//trong từ viết thường 



let text = " heLlo riKkei academy ";
let newText = text.split(" ");
let box = "";
for (let i = 0; i < newText.length; i++) {
    box += newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    box+=" ";
}
console.log(box);
//Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó

let month = +prompt("nhập tháng");
let year = +prompt("nhập tháng");
if (year % 4 == 0){
    if (year % 100 == 0){
        if (year % 400 == 0){
            if(month===1 ||month===3 ||month===5 ||month===7 ||
                month===8 ||month===10 ||month===12){
                    console.log("31");
            }else if(month===4 ||month===6 ||month===9 ||month===11){
                console.log("30");
            }else if(month===2){
                console.log("29");
            }else{
                console.log("không xác định");
            }
        }else{
            if(month===1 ||month===3 ||month===5 ||month===7 ||
                month===8 ||month===10 ||month===12){
                    console.log("31");
            }else if(month===4 ||month===6 ||month===9 ||month===11){
                console.log("30");
            }else if(month===2){
                console.log("28");
            }else{
                console.log("không xác định");
            }
        }
    }else{
        if(month===1 ||month===3 ||month===5 ||month===7 ||
            month===8 ||month===10 ||month===12){
                console.log("31");
        }else if(month===4 ||month===6 ||month===9 ||month===11){
            console.log("30");
        }else if(month===2){
            console.log("29");
        }else{
            console.log("không xác định");
        }
    }

}else{
    
    if(month===1 ||month===3 ||month===5 ||month===7 ||
        month===8 ||month===10 ||month===12){
            console.log("31");
    }else if(month===4 ||month===6 ||month===9 ||month===11){
        console.log("30");
    }else if(month===2){
        console.log("28");
    }else{
        console.log("không xác định");
    }
}










    

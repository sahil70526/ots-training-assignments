// ------------ Problem -1 9 Nov-------------------

let result2 = ""

let str1= "ABCDE"


for (let i = 1; i <= str1.length; i++) {
    for (let j = 0; j < i; j++) {
        result2 = result2.concat(str1.slice(j,i))
        break;
    }
    result2 += "\n"
}
console.log(result2);
result2=""
for (let i = str1.length-1; i >=1; i--) {
    for (let j = 0; j < i; j++) {
        result2 = result2.concat(str1.slice(j,i))
        break;
    }
    result2 += "\n"
}
console.log(result2);

// ------------------ problem 2 9Nov------------------
let result3=""
for(let i=1;i<=11;i++){
    for(let j=1;j<=i;j++){
        if(j==1){
            result3 += "*"
        }
        else if(j%2==0){
            result3 += j;
        }else{
            result3 += "*"
        }
    }
    result3 += "\n"
}

console.log(result3);

// ------------------------ problem no 3 9nov------------------------
let str2="My name is Akshay Khurana"
let arr = str2.split(" ");
let result = ""
let starc = 1
let starad = 1
for (let i = 0; i < arr.length; i++) {
    let nstr = arr[i];
    result += nstr;

    for (let j = 1; j <= starc; j++) {
        result += "*"
    }
    result += " ";
    for (let k = 1; k <= starad; k++) {
        if(starad<arr.length){
            result += "@"
        }else{
            break;
        }
    }
    
    starc = starc + 1
    starad= starad +1
}


console.log(result);
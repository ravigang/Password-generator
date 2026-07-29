let passLength = document.getElementById("length");
let passLengthValue = document.getElementById("lengthValue");
passLength.addEventListener("input", (e) => {
    e.preventDefault();
    passLengthValue.innerText = `Length of password = ${passLength.value}`;
});

function randomValue(min, max){
    let rV = Math.floor(Math.random() * (max - min + 1) + min)
    return rV
    
}

const capital = document.getElementById("isCapital");
const small = document.getElementById("isSmall");
const number = document.getElementById("isNumber");
const symbol = document.getElementById("isSymbol");


let writePass = document.getElementById("passPlace");
let genButton = document.getElementById("generatePass");

genButton.addEventListener("click", () => {
    let arr = [];
    let count = 0
    let empty = false;
    for(let i = 0; count < Number(passLength.value); i++){
        if(capital.checked && count < Number(passLength.value)){
            count++;
            arr.push(String.fromCharCode(randomValue(65, 90)))
            
            empty = true;
        }
        if(small.checked && count < Number(passLength.value)){
            count++
            arr.push(String.fromCharCode(randomValue(97, 122)))
            empty = true;
            
        }
        if(number.checked && count < Number(passLength.value)){
            count++
            arr.push(String.fromCharCode(randomValue(48, 57)))
            empty = true;
        }
        if(symbol.checked && count < Number(passLength.value)){
            empty = true;
            
            let rSymbol = randomValue(1, 2)
           
            if(rSymbol == 1){
                count++
            arr.push(String.fromCharCode(randomValue(35, 38)))
            }else{
                count++
                arr.push(String.fromCharCode(randomValue(63, 64)))
                
            }
        }

        if(!empty){
            alert("Pls select either one of the boxes")
            break;
        }




}


    arr.sort(() => {

        ret =  0.5 - Math.random();
        console.log(ret);
        return ret
    })
    writePass.value = `${arr.join("")}`

    

})


// copy feature and styling will be done afterwords

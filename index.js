let passLength = document.getElementById("length");
let passLengthValue = document.getElementById("lengthValue");
passLength.addEventListener("input", (e) => {
    e.preventDefault();
    passLengthValue.innerText = `${passLength.value}`;
});

function randomValue(min, max){
    let rV = Math.floor(Math.random() * (max - min + 1) + min)
    return rV
    
}

const capital = document.getElementById("isCapital");
const small = document.getElementById("isSmall");
const number = document.getElementById("isNumber");
const symbol = document.getElementById("isSymbol");
let cpBtn = document.getElementById("beforeTick");
let copied = document.getElementById("tick")


let writePass = document.getElementById("passPlace");
let genButton = document.getElementById("generatePass");



if(localStorage.length != 0){
    let dispArr = JSON.parse(localStorage.getItem("passHistory"));
    for(info of dispArr){
        document.getElementById("onclickExpand").insertAdjacentHTML( "beforeend" ,`<div class="try"><p style="font-size: 13px;">${info.date}</p><p style="font-size: x-large;">${info.pass}</p></div>`);
    }
}



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
            alert("Pls select at least one checkbox");
            break;
        }




}


    arr.sort(() => {

        ret =  0.5 - Math.random();
        return ret
    })
    let passNew = `${arr.join("")}`
    writePass.value = passNew;

    let arrPass = JSON.parse(localStorage.getItem("passHistory"));
    let DateC = new Date();
    let dateK = `${DateC.getDay()}/${DateC.getMonth() + 1}/${DateC.getFullYear()}`;
    if(arrPass === null){
        
        let newArr = [{date:dateK, pass: passNew}]
        localStorage.setItem("passHistory", JSON.stringify(newArr));
    }else{
        // console.log(arrPass);
        arrPass.push({date:dateK, pass: passNew});
        localStorage.setItem("passHistory", JSON.stringify(arrPass));

    }
    
    document.getElementById("onclickExpand").insertAdjacentHTML( "beforeend" ,`<div class="try"><p style="font-size: 13px;">${dateK}</p><p style="font-size: x-large;">${passNew}</p></div>`);

    
   
    

    




    

})




cpBtn.addEventListener("click", () => {
    window.navigator.clipboard.writeText(`${writePass.value}`);
    cpBtn.setAttribute("style", "display:none;");
    copied.setAttribute("style", "display:block;")

    setTimeout(() => {
        copied.setAttribute("style", "display:none;");
    cpBtn.setAttribute("style", "display:block;")
    }, 3000);
    

})

let count = 0;

let eButton = document.getElementById("onclickExpand");
eButton.addEventListener("click", () => {
    if(count === 0){
    eButton.className = "clkExpnd";
    count = 1;
    document.getElementById("downarr").classList.replace("rotate1", "rotate2");
    



    }else{
        eButton.className = "bfrExpnd";
        count = 0;  
        document.getElementById("downarr").classList.replace("rotate2", "rotate1");
    

    }
})

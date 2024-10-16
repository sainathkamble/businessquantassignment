

let firstRow=document.querySelector(".matric1")
let option1=document.querySelector(".div1 select");
let option4=document.querySelector(".div4 select");
let option3=document.querySelector(".div3 input")
let option2=document.querySelector(".div2 select");
let btn=document.querySelector(".btn2");
let table=document.querySelector(".body");
let arrOfCompare =["equal to","greater than","less than", "greater than or equal to","less than or equal to"];


let arr=table.children;

let firstRowArray=firstRow.cells;

let btn1=document.querySelector(".btn1")


    btn1.addEventListener("click",()=>{

        // firstSelect box option2
    
        let divOne=document.createElement("div");
        divOne.classList.add("mainContent");
        let div0=document.querySelector(".newContent");
        div0.insertAdjacentElement("beforebegin",divOne);
        let divOneChild1=document.createElement("div");
        divOneChild1.classList.add("div1");
        divOne.insertAdjacentElement("afterbegin",divOneChild1);
        let select1=document.createElement("select");
        select1.classList.add("matric");
        divOneChild1.insertAdjacentElement("afterbegin",select1);
        let optionOne=document.createElement("option");
        let optionTwo=document.createElement("option");
        let optionThree=document.createElement("option");
        let optionFour=document.createElement("option");
        let optionFive=document.createElement("option");
    
        optionTwo.setAttribute("value","Revenue");
        optionThree.setAttribute("value","GP");
        optionFour.setAttribute("value","FCF");
        optionFive.setAttribute("value","Copex");
    
        select1.appendChild(optionOne);
        select1.appendChild(optionTwo);
        select1.appendChild(optionThree);
        select1.appendChild(optionFour);
        select1.appendChild(optionFive);
    
        optionOne.innerText="Select Matric";
        optionTwo.innerText="Revenue";
        optionThree.innerText="GP";
        optionFour.innerText="CFC";
        optionFive.innerText="Copex";
    
        // secondSelect box
    
        let divOneChild2=document.createElement("div");
        divOneChild2.classList.add("div2");
        divOneChild1.insertAdjacentElement("afterend",divOneChild2);
        let select2=document.createElement("select");
        select2.setAttribute("name","operator");
        divOneChild2.insertAdjacentElement("afterbegin",select2);
    
        let option2nd1=document.createElement("option");
        let option2nd2=document.createElement("option");
        let option2nd3=document.createElement("option");
        let option2nd4=document.createElement("option");
        let option2nd5=document.createElement("option");
        let option2nd6=document.createElement("option");
    
        option2nd2.setAttribute("value","equal to");
        option2nd3.setAttribute("value","greater than");
        option2nd4.setAttribute("value","less than");
        option2nd5.setAttribute("value","greater than or equal to");
        option2nd6.setAttribute("value","less than or equal to");
    
        select2.appendChild(option2nd1);
        select2.appendChild(option2nd2);
        select2.appendChild(option2nd3);
        select2.appendChild(option2nd4);
        select2.appendChild(option2nd5);
        select2.appendChild(option2nd6);
    
        option2nd1.innerText="select operator";
        option2nd2.innerText="Equal To";
        option2nd3.innerText="Greater Than";
        option2nd4.innerText="Less Than";
        option2nd5.innerText="Greater Than Or Equal To";
        option2nd6.innerText="Less Than Or Equal To";
    
        // ThirdSelector box
    
        let divOneChild3=document.createElement("div");
        divOneChild3.classList.add("div3");
        divOneChild2.insertAdjacentElement("afterend",divOneChild3);
        let inp=document.createElement("input");
        inp.setAttribute("type","number");
        inp.setAttribute("id","number");
        inp.setAttribute("placeholder","Enter Any Value");  
        divOneChild3.insertAdjacentElement("afterbegin",inp);
    
        // fourthSelector box
        let divOneChild4=document.createElement("div");
        divOneChild4.classList.add("div4");
        divOne.appendChild(divOneChild4);
        let select4=document.createElement("select");
        select4.setAttribute("name","digits");
        select4.setAttribute("class","placeValue");
        divOneChild4.insertAdjacentElement("afterbegin",select4); 
    
        let option4th1=document.createElement("option");
        let option4th2=document.createElement("option");
        let option4th3=document.createElement("option");
        let option4th4=document.createElement("option");
    
        option4th2.setAttribute("value","1000000");
        option4th3.setAttribute("value","1000000000");
        option4th4.setAttribute("value","1000000000000");
    
        select4.appendChild(option4th1);
        select4.appendChild(option4th2);
        select4.appendChild(option4th3);
        select4.appendChild(option4th4);
    
        option4th1.innerText="Select Place Value";
        option4th2.innerText="Million";
        option4th3.innerText="Billion";
        option4th4.innerText="Trillion";
    
        let btn3=document.createElement("button");
        btn3.innerHTML="<i></i>";
        btn3.classList.add("btn3");
        divOne.appendChild(btn3);
        let i=document.querySelector("btn3 i");
            
        option1=select1;
        option2=select2;
        option3=inp;
        option4=select4;
        mostOne();
        clickForDel(btn3);
        

        
    });

function clickForDel(btn3){
    btn3.addEventListener("click",function (){
        this.parentElement.style.display="none";
    });

    
}

function mostOne(){
    btn.addEventListener("click",()=>{
        filterOne();

    });
    
}


function filterOne(){
    for(let i=5; i<firstRowArray.length; i++){
        if((firstRowArray[i].innerText)==(option1.value)){
            let a=i;
            console.log(a);
            console.log(option1.value);
            console.log(option2.value);
            console.log(option3.value);
            console.log(option4.value);
           filterTwo(a);
        // }else{
        //     result="you didn't select option";
        }
    }
    // alert(result);
}


function filterTwo(a){
    for(let i=0; i<arrOfCompare.length; i++){
        if(option2.value==arrOfCompare[i]){
            if(i==0){
                filterThree(a);
            }else if(i==1){
                filterFour(a);
            }else if(i==2){
                filterFive(a);
            }else if(i==3){
                filterSix(a);
            }else if(i==4){
                filterSeven(a);
            }
        // }else{
        //     result="you didn't select option";
        }
    }
}



function filterThree(a){
    for(let i=0; i<arr.length; i++){
        let reValue=(arr[i].children[a].innerText);
        let newValue=(option3.value)*(option4.value);
        if(reValue==newValue){
            console.log("yes",arr[i]);
        }else{
            console.log("no",arr[i]);
            arr[i].style.display="none";
        }  
    }
}


function filterFour(a){
    for(let i=0; i<arr.length; i++){
        let reValue=(arr[i].children[a].innerText);
        let newValue=(option3.value)*(option4.value);
        if(reValue>newValue){
            console.log("yes",arr[i]);
        }else{
            console.log("no",arr[i]);
            arr[i].style.display="none";
        }
        
    }

}
function filterFive(a){
    for(let i=0; i<arr.length; i++){
        let reValue=(arr[i].children[a].innerText);
        let newValue=(option3.value)*(option4.value);
        if(reValue<newValue){
            console.log("yes",arr[i]);
        }else{
            console.log("no",arr[i]);
            arr[i].style.display="none";
        }
        
    }

}
function filterSix(a){
    for(let i=0; i<arr.length; i++){
        let reValue=(arr[i].children[a].innerText);
        let newValue=(option3.value)*(option4.value);
        if(reValue>=newValue){
            console.log("yes",arr[i]);
        }else{
            console.log("no",arr[i]);
            arr[i].style.display="none";
        }
        
    }

}
function filterSeven(a){
    for(let i=0; i<arr.length; i++){
        let reValue=(arr[i].children[a].innerText);
        let newValue=(option3.value)*(option4.value);
        if(reValue<=newValue){
            console.log("yes",arr[i]);
        }else{
            console.log("no",arr[i]);
            arr[i].style.display="none";
        }
        
    }
}


mostOne();
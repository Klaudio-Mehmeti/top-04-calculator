'use strict';
const buttons = document.querySelectorAll('.btn');
const previousOperandEl = document.querySelector('.previous-operand');
const currentOperandEl = document.querySelector('.current-operand');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationsEl = document.querySelectorAll('.operator');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.clear');
const clearLastEl= document.querySelector('.delete');
const decimalBtn = document.querySelector('.decimal');

/////////////////////////
const sumBtn = document.querySelector('#sum');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');




let dis1Num='';
let dis2Num='';
let result=null;
let lastOperation='';
let haveDot=false;


numbersEl.forEach(number=> {
    number.addEventListener('click', (e)=>{
        if (e.target.innerText ==='.' && !haveDot) {
            haveDot=true;
            console.log('dfdfdf');
        }else if(e.target.innerText==='.' && haveDot) {
            console.log('to many dots');
            return;
        }
        dis2Num+=e.target.innerText;
        currentOperandEl.innerText=dis2Num;
    })
});

operationsEl.forEach(operation=>{
    operation.addEventListener('click', (e)=>{
        if(!dis2Num) result;
        haveDot=false;
        const operationName = e.target.innerText;
        if(dis1Num&&dis2Num&&lastOperation){
            mathOperation();

        }else{
            result=parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation=operationName;
    })
});



function clearVar(name=''){
    dis1Num+= dis2Num + ' ' + name + ' ';
    previousOperandEl.innerText=dis1Num;
    currentOperandEl.innerText='0';
    dis2Num=''
    tempResultEl.innerText=result;
}

function mathOperation(){
    if(lastOperation ==='x'){
        result=parseFloat(result)* parseFloat(dis2Num);
    } else if(lastOperation ==='+'){
        result=parseFloat(result)+ parseFloat(dis2Num);
    }else if(lastOperation ==='-'){
        result=parseFloat(result)- parseFloat(dis2Num);
    }else if(lastOperation ==='/'){
        result=parseFloat(result)/ parseFloat(dis2Num);
    }
}

equalEl.addEventListener(  'click', (e)=>{
    if(!dis1Num || !dis2Num) return;
    haveDot=false;
    mathOperation();
    clearVar();
    currentOperandEl.innerText=result;
    dis2Num=result;
    dis1Num='';
    tempResultEl.innerText='';
})


clearEl.addEventListener('click', (e)=>{
    currentOperandEl.innerText='0';
    previousOperandEl.innerText='0'
    dis2Num='';
    dis1Num='';
    tempResultEl.innerText='0';
})

clearLastEl.addEventListener('click', (e)=>{
    currentOperandEl.innerText= currentOperandEl.innerText.slice(0, -1);
    dis2Num=dis2Num.slice(0,-1);
})



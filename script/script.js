'use strict';


class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement;
        this.currentOperandTextElement=currentOperandTextElement;
        this.clear();
    }

    clear(){
        this.currentOperand = '0'
        this.previousOperand = ' '
        this.operation=undefined
    }

    delete(){
        this.currentOperand=this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes(".")) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }
    
    


    chooseOperation(operation){
        if(this.currentOperand==='')return
        if(this.previousOperand!==''){
            this.compute()
        }
        this.operation=operation
        this.previousOperand=this.currentOperand;
        this.currentOperand='';
    }

    compute (){
        let computation
        const prev=parseFloat(this.previousOperand)
        const current=parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current))return
        

        switch (this.operation){
            case '+' : 
            computation=prev+current
            break
            case '-' :  
            computation=prev-current
            break
            case '/' : 
            if (current ===0 ){
                alert(`Dividing by zero is not allowed!`)
                return;
            } else {
                computation=prev/current
            }            
            break
            case '*' : 
            computation=prev*current
            break
            default:return
        }


        this.currentOperand = computation
        this.operation=undefined
        this.previousOperand='';
    };


    updateDisplay(){
        this.currentOperandTextElement.innerText=this.currentOperand;
        if(this.operation!= null){
            this.previousOperandTextElement.innerText=`${this.previousOperand} ${this.operation}`;
        }else{
            this.previousOperandTextElement.innerText='';
        }
    }


}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons= document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);



numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',button=>{
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click',button=>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click',button=>{
    calculator.delete();
    calculator.updateDisplay();
})


document.addEventListener('keypress', event => {
    const key = event.key;
    if (/\d/.test(key) || key==='.') {
      calculator.appendNumber(key);
      calculator.updateDisplay();
    } else if (/[+\-*/]/.test(key)) {
      calculator.chooseOperation(key);
      calculator.updateDisplay();
    } else if (key === '=') {
      calculator.compute();
      calculator.updateDisplay();
    } else if (key === 'Enter') {
      calculator.compute();
      calculator.updateDisplay();
    } else if (key === 'Backspace') {
      calculator.delete();
      calculator.updateDisplay();
    } else if (key === 'Escape') {
      calculator.clear();
      calculator.updateDisplay();
    }
  });
  


////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////ANOTHER WAY TO BUILD CALCULATOR//////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// const buttons = document.querySelectorAll('.btn');
// const previousOperandEl = document.querySelector('.previous-operand');
// const currentOperandEl = document.querySelector('.current-operand');
// const tempResultEl = document.querySelector('.temp-result');
// const numbersEl = document.querySelectorAll('.number');
// const operationsEl = document.querySelectorAll('.operator');
// const equalEl = document.querySelector('.equal');
// const clearEl = document.querySelector('.clear');
// const clearLastEl= document.querySelector('.delete');
// const decimalBtn = document.querySelector('.decimal');

// /////////////////////////
// const sumBtn = document.querySelector('#sum');
// const subtractBtn = document.querySelector('#subtract');
// const multiplyBtn = document.querySelector('#multiply');
// const divideBtn = document.querySelector('#divide');


// let dis1Num='';
// let dis2Num='';
// let result=null;
// let lastOperation='';
// let haveDot=false;
// let lastClickedOperation = null;


// numbersEl.forEach(number=> {
//     number.addEventListener('click', (e)=>{
//         if (e.target.innerText ==='.' && !haveDot) {
//             haveDot=true;
//         }else if(e.target.innerText==='.' && haveDot) {
//             return;
//         }
//         dis2Num+=e.target.innerText;
//         currentOperandEl.innerText=dis2Num;
//     })
// });



// operationsEl.forEach(operation => {
//   operation.addEventListener('click', (e) => {
//     const currentOperation = e.target.innerText;
//     if (lastClickedOperation !== currentOperation) {
//       // Only execute the following code if the current operation is different from the last one
//       if (!dis2Num) result;
//       haveDot = false;
//       if (dis1Num && dis2Num && lastOperation) {
//         mathOperation();
//       } else {
//         result = parseFloat(dis2Num);
//       }
//       clearVar(currentOperation);
//       lastOperation = currentOperation;
//       lastClickedOperation = currentOperation;
//     }
//   });
// });






// function clearVar(name=''){
//     dis1Num+= dis2Num + ' ' + name + ' ';
//     previousOperandEl.innerText=dis1Num;
//     currentOperandEl.innerText='0';
//     dis2Num=''
//     tempResultEl.innerText=result;
// }

// function mathOperation(){
//     if(lastOperation ==='x'){
//         result=parseFloat(result)* parseFloat(dis2Num);
//     } else if(lastOperation ==='+'){
//         result=parseFloat(result)+ parseFloat(dis2Num);
//     }else if(lastOperation ==='-'){
//         result=parseFloat(result)- parseFloat(dis2Num);
//     }else if(lastOperation ==='/'){
//         result=parseFloat(result)/ parseFloat(dis2Num);
//     }
// }

// equalEl.addEventListener(  'click', (e)=>{
//     if(!dis1Num || !dis2Num) return;
//     haveDot=false;
//     mathOperation();
//     clearVar();
//     currentOperandEl.innerText=result;
//     dis2Num=result;
//     dis1Num='';
//     tempResultEl.innerText='';
// })


// clearEl.addEventListener('click', (e)=>{
//     currentOperandEl.innerText='0';
//     previousOperandEl.innerText='0'
//     dis2Num='';
//     dis1Num='';
//     tempResultEl.innerText='0';
// })

// clearLastEl.addEventListener('click', (e)=>{
//     currentOperandEl.innerText= currentOperandEl.innerText.slice(0, -1);
//     dis2Num=dis2Num.slice(0,-1);
// })

// window.addEventListener('keydown', (e)=>{
//     e.preventDefault();
//     if (
//         e.key==='0' || 
//         e.key==='1' || 
//         e.key==='2' || 
//         e.key==='3' || 
//         e.key==='4' || 
//         e.key==='5' || 
//         e.key==='6' || 
//         e.key==='7' || 
//         e.key==='8' || 
//         e.key==='9' || 
//         e.key==='.'){
//             clickButtonEl(e.key);
//     } else if(
//         e.key==='*' ||
//         e.key==='+' ||
//         e.key==='-' ||
//         e.key==='/' 
//     ){
//         clickOperation(e.key);
//     } else if(e.key==='*'){
//         clickOperation('x')
//     } else if (e.key==='=' || e.key==='Enter') {
// clickEqual();
//     }

// });


// function clickButtonEl(key){
//     numbersEl.forEach(button=>{
//         if (button.innerText===key) 
//         {button.click()};
//     })
// };

// function clickOperation(key){
//     operationsEl.forEach(button=>{
//         if(button.innerText===key){
//             button.click();
//         }
//     })
// }

// function clickEqual(){
//     equalEl.click();
// }
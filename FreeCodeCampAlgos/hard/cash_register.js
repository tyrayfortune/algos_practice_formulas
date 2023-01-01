// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price),
//  payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order,
//  as the value of the change key.


// Currency Unit	Amount
// Penny	    $0.01 (PENNY)
// Nickel	    $0.05 (NICKEL)
// Dime	        $0.1 (DIME)
// Quarter	    $0.25 (QUARTER)
// Dollar	    $1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)

//expected outcomes
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], 
// ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], 
// ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
// ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1],
//  ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
//  ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0],
//  ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.

// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], 
// ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
//  ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

//given fromula
// function checkCashRegister(price, cash, cid) {
//     let change;
//     return change;
// }

function checkCashRegister(price, cash, cid) {
    //multiplying it by 100 to avoid js problems
    let change = cash*100 - price*100
    let total = 0
    //obj to store $$ amounts
    const cashValues = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
        };
    //counting the total cash in drawer and adding it to the total
    for (let elem of cid){
        total += elem[1]*100
    }
    //if there isnt enough change
    if (change > total) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    //if change is exactly cid total
    else if(change === total){
        return {status: "CLOSED", change: cid}
    }
    else{
        let answer = []
        //to go from highest to lowest
        cid = cid.reverse()

        for (const elem of cid) {
            let holder = [elem[0], 0]
            elem[1] = elem[1]*100
            //going thru each element and if there is money there decrement by the associated amount, and add it to holding element
            while (change >= cashValues[elem[0]] && elem[1] > 0) {
                change -= cashValues[elem[0]]
                elem[1] -= cashValues[elem[0]]
                holder[1] += cashValues[elem[0]]/100
            }
            if (holder[1]>0) {
                answer.push(holder)
            }
        }
        //to account for non-exact change
        if (change > 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []}
        }
        return {status: "OPEN", change: answer}
    }
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], 
["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//i believe you need a way to count the change, if the cid is less then cash, give it all, otherwise you need to incriment by the $ amoount

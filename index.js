#!/usr/bin/env node
import inquirer from "inquirer";
// Insert your ATM or debit card.  --- done
// Enter your four-digit Personal Identification Number, or PIN.  ---- done
// Select a transaction: withdrawal, balance inquiry,fast cash. ------ done
console.log("Insert Your ATM Or Debit Card .");
const realPinCode = 1212;
let totalBlance = 50000;
let limit = 10000;
const pin = await inquirer.prompt([
    {
        name: "pinCode",
        type: "number",
        message: "Enter Your Pin Code : ",
    },
]);
if (pin.pinCode === realPinCode) {
    console.log("Select Any One Option ");
    const option = await inquirer.prompt([
        {
            name: "selection",
            type: "list",
            choices: ["Blance Inquiry", "Fast Cash", "Withdraw"],
        },
    ]);
    if (option.selection === "Blance Inquiry") {
        console.log("Your Current Blance is", totalBlance);
    }
    else {
    }
    if (option.selection === "Fast Cash") {
        const draw = await inquirer.prompt([
            {
                name: "amounts",
                type: "list",
                choices: ["5000", "3000", "2000", "1000"],
            },
        ]);
        if ((draw.amounts === "5000", "3000", "2000", "1000")) {
            console.log(" Transaction Successful ! ");
            console.log("Your Remaining Blance is :", (totalBlance -= draw.amounts));
        }
    }
    if (option.selection === "Withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "Rupees",
                type: "number",
                message: "enter amount",
            },
        ]);
        if (withdrawAmount.Rupees <= limit) {
            console.log("Transaction successful", "Your Remaining Blance is :", (totalBlance -= withdrawAmount.Rupees));
        }
        else {
            console.log("Limit Restriction");
        }
    }
}
else {
    console.log("Your Pin Code is incorrect , Please enter valid Pin Code");
}

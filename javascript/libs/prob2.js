let list;
let inputList = [];
list = readInput();
displayStats(list);

function readInput() 
{
    int = (prompt("Enter an integer (a negative integer to quit):"));
    while (true) 
    {
        if (int > 0) 
        {
            inputList.push(int);
            console.log(inputList);
            int = prompt("Enter an integer (a negative integer to quit):");
        }
        else if (isNaN(int)){
            int = prompt("Enter an integer (a negative integer to quit):");
        }
        else if (int < 0) {
            break;
        }
        else {
            int = prompt("Enter an integer (a negative integer to quit):");
        }
    }
    return inputList;
}

function displayStats() {
    let avg = 0;
    let sum = 0;
    let num = [];
    for (let i = 0; i < inputList.length ; i++) {
        num.push(parseInt(inputList[i]));
        sum += num[i];
    }

    avg = sum / num.length;
    avg = avg.toFixed(2);

    let min = Math.min.apply(Math,num);
    let max = Math.max.apply(Math,num);

    return (num.length == 0) ? alert("For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0")
    : alert("For the list "+ inputList.join(",") +", the average is "+ avg + ", the minimum is "+ min + ", and the maximum is "+ max);
}
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'toolchanger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY tools
 *  2. INTEGER startIndex
 *  3. STRING target
 */

function toolchanger(tools, startIndex, target) {
    if (tools[startIndex] === target) return startIndex
    if (tools.length === 0) return 0
    // Write your code here
    let leftSteps = +Infinity
    let rightSteps = +Infinity
    let count = 0
    for (let i = startIndex; count < tools.length; i++) {
        let tool = tools[i]
        if (target === tool) {
            rightSteps = count
            break
            
        }
        count++
        if (i === tools.length - 1) {
            i = -1
        }
    }
    
    let counter = 0
     for (let i = startIndex; counter >= 0; i--) {
        let tool = tools[i]
        
        if (counter > rightSteps) return rightSteps;
        
        if (target === tool) {
            leftSteps = counter
            break;
        }
        counter++
           if (i === 0) {
            i = tools.length
        }
    }
    
    if (leftSteps > rightSteps) {
        return rightSteps
    }  else {
        return leftSteps
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const toolsCount = parseInt(readLine().trim(), 10);

    let tools = [];

    for (let i = 0; i < toolsCount; i++) {
        const toolsItem = readLine();
        tools.push(toolsItem);
    }

    const startIndex = parseInt(readLine().trim(), 10);

    const target = readLine();

    const result = toolchanger(tools, startIndex, target);

    ws.write(result + '\n');

    ws.end();
}

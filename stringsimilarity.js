function processData(input) {
// remove \r from input
input = input.replace(/(\r)/gm,"");

//get the array of characters using array.split()
let arrayOfChars = input.split("\n");
//console.log("arrayOfChars", arrayOfChars)

let t           = arrayOfChars[0];
let secondArray = arrayOfChars[1].trim();
let thirdArray  = arrayOfChars[2];

secondArray = secondArray.replace(/(\n)/gm,"");

// ==============================================
// Split each letter and put them into arrays
// ==============================================
let a       = secondArray.split('');
let b       = getResultsUsingArrayShift();
thirdArray  = thirdArray.split('');


//console.log(a)
//console.log(b)

var counts = {};


//Solution using array.shift()
function getResultsUsingArrayShift() {
  let temp = a.slice(0);
  let first = temp.shift();
  // Don't push because doesn't need to check againist itself
  //temp.push(first);
  return temp;
}


let result = getDeleteCountUsingDestructive();

function getDeleteCountUsingDestructive() {
        let aChars = a;
        let bChars = b;
        var count   = 0;
        var letters = [];
        let total   = 0;

        let g = 0;
        // Original Array
        console.log("\n")
        console.log("------------ORIGINAL ARRAY--------------");
        console.log("\r")
        console.log("aChars", aChars);
        console.log("bChars", bChars);
        console.log("\r")


        for (var i = 0; i <= secondArray.length + 1; i++){
            console.log(i)
            if (aChars[0] < bChars[0]) {

                console.log(aChars[0] + " < " + bChars[0])

                bChars.shift();

                let bLength = bChars.length + 1;

                if(bLength === 1 ){
                    console.log('---------break---------')
                    break;
                }

            } else if (aChars[0] > bChars[0]) {
                
                console.log(aChars[0] + " > " + bChars[0])
                bChars.shift();
                let bLength = bChars.length + 1;

                // if the length of b is 1 break
                if(bLength === 1 ){
                    console.log('---------break---------');

                    break;
                }
        
            } else if (bChars[0] === "undefined") {
                //bChars = t;
                //console.log("new b array " + bChars[0]);

            } else {
                // if both values are equal
                console.log(aChars[0] + " = " + bChars[0])
                //console.log("0" + " = " + i + "  (Index Check)")
               // console.log(i)

                // add one to count
                count++;

                // shift equivalent value to the end of b array
                bChars.shift();

                //aChars.shift();
                letters.push(aChars.shift());
                console.log("letters", letters);
                console.log("count", count);
            }

            console.log("----------------------------------------");

            console.log("\n")
            console.log("------------SHIFTED ARRAYS--------------");
            console.log("\r")
            console.log("aChars", aChars);
            console.log("bChars", bChars);
            console.log("\r")


        }// CLOSE FOR LOOP
        total=total+count;

        console.log('total', total)


    }    //getDeleteCountUsingDestructive

} // CLOSE PROCESS DATA

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});




/*
if (aChars[0] < bChars[0]) {
    //a.push(aChars.shift());
    } else if (aChars[i] > bChars[i]) {
      b.push(bChars.shift());

    } else {
      // both are equivalent shift them both
      //count++;
      //aChars.shift();
      //letters.push(aChars.shift());
      //console.log("count", count);

    }

    console.log("aChars", aChars);
    console.log("bChars", bChars);
    console.log("\n")
    //console.log("letters", letters);

    }
console.log(count)
*/

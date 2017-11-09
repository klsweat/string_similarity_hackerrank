
function processData(input) {
    //Enter your code here
    input = input.replace(/(\r)/gm,"");
    input=input.split("\n");
    //console.log("array", input)
    //console.log("\n")
    //console.log("------------loop through string--------------");
    //console.log("\r")

    // Run for thenumber of times of strings    
    for (var i in input) {
        if(parseInt(i) !== parseInt(0) ){
            var index = i++; 
            //console.log("index", index)
            checkSimilarities(index);    
        }
        
    }


    function checkSimilarities(index){
    var str=input[index];
    var len=input[index].length;
    var count=0;
    var sameCharsRow=0;
    var total=0;
    var isFirstTime = true;
            for(i=0;i<len;i++)
    {
        // ==============================================
        // If substring equals prefix
        // ============================================== 
        if (str[0] == str[i]) {
            
            // ======================================================
            // j is equal to matched index+ # of matches
            // loop through each index and see how many times there is a match
            // ====================================================== 
            for( j = i + sameCharsRow; j < len; j++){

                //console.log("\r")
                //console.log("J is equals ", j)  

                // ======================================================
                // If the first integer equals prefix, then add 1
                // thats determines which index you match the prefix with
                // on first run
                // else isFirstTime is false
                // this is how you check b against a
                // ====================================================== 
                if(isFirstTime && str[j] == str[0]){
                sameCharsRow++;
                } else {
                    isFirstTime = false;
                }
                
                //console.log("sameCharsRow: ", sameCharsRow)
                //console.log("isFirstTime", isFirstTime)

                // Determine # of similarities
                // first run: if index[ 1-0 ] = [0]
                //console.log("j - i = ", j - i)
                //console.log("j = ", j)
                //console.log(str[j-i] + " = " + str[j])
                if(str[j-i] == str[j]){
                    count++;
                    //console.log("count", count)
                } else {
                    break;
                }
            }

            //console.log("\r")
            //console.log("============================")
            //console.log("inner loop is over")
            //console.log("============================")
            
            // if sameChars is greater than 0 subtract 1 and then add it count + 0;
            if (sameCharsRow > 0) {
                sameCharsRow--;
                count += sameCharsRow;
            }
            isFirstTime = true;

        }

        //console.log("\r")
        //console.log("============================")
        //console.log("Looping through each index is over")
        //console.log("============================")
        //console.log("\r")

        //console.log("isFirstTime", isFirstTime)
        //console.log("count", count)
    }
    console.log(count);

    }
      
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
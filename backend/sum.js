//Go through the following code, you will be asked how many times each line will be executed.
function myFunction() {

        console.log("Hello World");
        let limit = 25;
        let sum = 60;
        var randomValue = 2.77;
        var value=1
    
        for (let value = 1; value < limit; value = value + 3) {
            console.log("randomValue: ", randomValue);
            for (let j = 1; j < limit; j = j + 2) {
                sum++;
            }
        console.log("Sum = ", sum);
        }
     

}


myFunction();
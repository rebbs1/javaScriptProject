/*let counter = 0;                                      // This while loop will run 0 to 10 times
while(counter <= 10) {
    console.log('counter ' +counter);
    counter = counter+1                                 // code was incremented to prevent it from running infinitely
} */

/*let counter = 1;                                       // This while loop will run 1 to 10 times
while(counter <= 10) {
    console.log('counter ' +counter);
    counter = counter+1
} */


/*let counter = 5;                                       // This while loop will run 5 to 10 times
while(counter <= 10) {
    console.log('counter ' +counter);
    counter = counter+1
} */


counter = 5;                                             // This do while loop will continue executing until all 
do{                                                      // the possible conditions has been executed
    console.log('counter value is ' +counter);
    counter++
} while(counter <= 10)

counter = 15;                                        // The do while loop checks that the condition is false an
do{                                                  // did not continue to execute after executing the first statement
    console.log('counter value is ' +counter);
    counter++
} while(counter <= 10)
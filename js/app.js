// function 1 - two arguments add together and multiply result by 5, return computed value
function sumMult5(num1, num2,){
    // we want Result to be the sum of variables num1 + num2
    let result = num1 + num2;
    // I want to return the result (sum) and now multiply that by 5
    return result *5;
}
console.log(sumMult5(5, 6));
console.log(sumMult5(44.2,66.8));
console.log(sumMult5(20,20));



// // function 2 
function getLength(text){
    // if the character length of string variable 'text' is over 10, return true
    // .length for string character length
    if(text.length > 10){
        return true;
        // if else, return false
    } else{
        return false;
    }
}
let text1 = `Skateboarder`;
console.log(getLength(text1));
let text2 = `Siobhan`;
console.log(getLength(text2));
let text3 = `Mississippi`;
console.log(getLength(text3));



// function 3 - one argument (array of strings), function will return first element in the array that starts with 'ph'
let americanCities = [`las vegas`, `los angeles`, `phoenix`, `palm Springs`, `philadelphia`];
for (let i = 0; i<americanCities.length; i++){
    // take the city for the currently iterated city within array
    let curCity = americanCities[i];
    // convert the array element into a string because startsWith works with Strings
    let stringCity = americanCities[i].toString();
    // if it starts with `ph` string, print out the city then break after the condition is met. 
    if (stringCity.startsWith(`ph`)){
        console.log(`City that starts with ph: ${curCity}`);
        break;
    }
}
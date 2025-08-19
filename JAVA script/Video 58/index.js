// function nice(name) {
//     console.log("hey " + name + " you are good")
//     console.log("hey " + name + " hey harry you are nice")
//     console.log("hey " + name + "  harry you tshirt is nice")
//     console.log("hey " + name + " hey harry your course is good")
// } 
//  nice("sachin");
//  nice("amit");

// console.log("hey harry you are good");
// console.log("hey harry you are nice");
// console.log("hey harry you tshirt is nice");
// console.log("hey harry your course is good");

function Sum(a,b,c=3) {
    // console.log(a+b);
    console.log(a+b+c);
    return a+b+c
}

 result1 = Sum(4,4);
 result2 = Sum(6,4);
 result3 = Sum(9,3,1);

 console.log("The sum of these numbers is: ", result1);
 console.log("The sum of these numbers is: ", result2);
 console.log("The sum of these numbers is: ", result3);


// arrow function

const func1 = (x)=>{
    console.log("I am an arrow function", x);
}
func1(34);
func1(66);
func1(84);
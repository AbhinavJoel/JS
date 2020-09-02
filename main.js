function ranges(x){
    if (x>10 && x<100)
    console.log("Its between one to hundred")
    else
    console.log("its not")
}

ranges(25)

var x = 50
switch (x)
{
    case 50:
        if (x>10 && x<100)
        console.log( "is between one to hundred")
        break;
        
    
    default:
        console.log("its not")
        console.log(typeof x)
    break;
}

function fibonacci(num) 
{ 
    var num1=0; 
    var num2=1; 
    var sum; 
    var i=0; 
    for (i = 0; i < num; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
} 
document.write("Fibonacci(7): "+fibonacci(7)+"<br>"); 

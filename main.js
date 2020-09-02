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

var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));
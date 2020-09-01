var x = document.getElementById("marks1").innerHTML;
var y = document.getElementById("marks2").innerHTML;
a= parseInt(x)
b= parseInt(y)
total = a+b
console.log(total)
avg= total/2
console.log(avg)
document.getElementById('total').innerHTML = total
document.getElementById('avg').innerHTML = avg

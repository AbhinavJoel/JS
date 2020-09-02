var a=10;
var b=20;
c=a/b;
try{
    if (c>1)
    console.log(c)
    else
    throw c
}
catch(c){
    console.log("div cannot be done")
}
finally{
    console.log(c)
}
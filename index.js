var output=[];
var count=1;
var i;
function fizzbuzz(){
    if(count % 3 ==0){
        if(count % 5==0){
            output.push("fizzbuzz");
        }else{
        output.push("fizz");
            }
    }else if(count % 5 ==0){
        output.push("buzz");
    }else{
        output.push(count);
    }
    
    count++;
    console.log(output);
}
for(i=0;i<=14;i++){
    fizzbuzz();
}

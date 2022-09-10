// vowels

let x = 'nila manikandan';
let y = ['a' , 'e' ,'i' ,'o' ,'u'];
let sum = 0;
for (i=0; i<x.length; i++){
    if(y.includes(x[i])){
        sum+=1;
    }
}
console.log(sum);
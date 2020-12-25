onmessage=function(event){
    var str=event;
    console.log(event)
    var sum=str.splite('').reduce(function(prev,i){
        prev=i+prev;
    },0)
    this.postMessage(sum);
}
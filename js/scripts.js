
// function passenger(username,from,to,time,book){
//     this.username;
//     this.from;
//     this.to;
//     this.time;
//     this.book;
// }
function book() {
    var username = document.getElementById('username').value;
    var from= document.getElementById('from').value;
    var to= document.getElementById('to').value;
    var time= document.getElementById('time').value;
    
    var html = 'Please show the following to your Driver: <br>' + username + '</br> ' + from +'-'+ to + '</br> ' + time;
    
    
    document.getElementById('result').innerHTML = html;
}
var seat= function(){
    return Math.floor(Math.random() * 30) + 1;
}    
 
document.getElementById('book').addEventListener('click', book);






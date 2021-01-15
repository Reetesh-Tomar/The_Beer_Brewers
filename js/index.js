function TemperatureSensor(){
    var randomTemp = Math.floor(Math.random()*10);
	return randomTemp; 
}

var btn = document.getElementById("btn1")



function refresh(){
    for(var i=1;i<=5;i++){ 

        var curr = TemperatureSensor();  
    
        var id1 = "mini"+i
        var id2 = "maxa"+i
        var min = Number(document.getElementById(id1).innerText);  
        var max = Number(document.getElementById(id2).innerText);  
    
         var statusid = "status"+i;  var divid="innerbox"+i;  var currtempid= "current"+i;
          
         console.log(document.getElementById(statusid).innerText)

        if(curr<min||curr>max){
            document.getElementById(statusid).innerText="ALERT!!"  ; 
            document.getElementById(divid).style.backgroundColor="red";
        }
        
        else{
            document.getElementById(statusid).innerText="SAFE"
            document.getElementById(divid).style.backgroundColor="green";
        }
        
        document.getElementById(currtempid).innerText=curr;
    }
}

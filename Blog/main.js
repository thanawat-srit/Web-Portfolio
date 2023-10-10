var count = 0
function postFunction(){
    var postText = document.getElementById("text1").value;
    if(postText != ""){
        if(count == 0){
            document.getElementById("topic1").innerHTML= postText;
            count++;
        }else if(count == 1){
            document.getElementById("comment1").innerHTML= postText;
            count++;
        }else if(count == 2){
            document.getElementById("comment2").innerHTML= postText;
            count++;
        }
        document.getElementById("text1").value = "";z
    }else{
        alert("Input Comment");
    }
    
}
function clearFunction(){
    document.getElementById("topic1").innerHTML = ""
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    count = 0;
}
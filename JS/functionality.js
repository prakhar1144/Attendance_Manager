function validatte(){
    var str1=document.getElementById("inputemail").value;
    var str2=document.getElementById("inputpass").value;
    var rem=document.getElementById("val").value;
    var year=document.getElementById("year").value;
    var details="Name: "+str1+"\n"+"Roll No.: "+str2+"\n"+"Year: "+year+"\n"+"Remember me: "+rem+"\n";
    window.confirm("Please confirm your details."+"\n"+details+"\n"+"Press OK to continue...\n");
}
function valuech(){
    document.getElementById("val").value="on"
}
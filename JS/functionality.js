function validatte(){
    var roll=document.getElementById("inputemail").value;
    var pasword=document.getElementById("inputpass").value;
    var remember=document.getElementById("val").value;
    var year=document.getElementById("year").value;
    var details="Roll No.: "+roll+"\n"+"Password: "+pasword+"\n"+"Year: "+year+"\n"+"Remember me: "+remember+"\n";
    if(rollvalidator(roll)&&passvalidator(pasword))
    {
        window.confirm("Please confirm your details."+"\n\n"+details+"\n"+"Press OK to continue...\n");
        $("#login").modal('hide');
        window.location="Second_Sem.html";
    }
    else{
        if(!rollvalidator(roll))
        {
            alert("Please enter a valid Roll No.\n");
        }
        else if(!passvalidator(pasword))
        {
            alert("Invalid Password !!!\n1.Password must be minimum 6 character\n2.Password must have atleast one Uppercase\n    and a Lowercase letter\n3.Password must have atleast one digit\n");
        }
        return false;
    }
       
}
function valuech(){
    document.getElementById("val").value="on"
}

function rollvalidator(rolls){
    var rollformat=/([1-2])([0-9])\d{4}$/;

    if (rollformat.test(rolls)&&rolls.length==6)
    { 
       return true;
    }
    else
    {
        return false;
    }
}


function passvalidator(paswords)
{
   
    var paswordformat=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (paswordformat.test(paswords))
    {
        return true;
    }
    else
    {
        return false;
    }
}

function validatte_registration(){
    var roll=document.getElementById("inputroll").value;
    var pasword=document.getElementById("inputpassr").value;
    var confirm=document.getElementById("confirmpass").value;

    if(!rollvalidator(roll))
    {
        alert("Please enter a valid Roll No.\n");
    }
    else if(!passvalidator(pasword))
    {
        alert("Invalid Password !!!\n1.Password must be minimum 6 character\n2.Password must have atleast one Uppercase\n    and a Lowercase letter\n3.Password must have atleast one digit\n");
    }
    else
    {
        if(pasword!=confirm)
        {
            alert("Passwords not matched!!");
        }
        else
        {
           alert("Hurray! Registration successful\nPlease login with your credentials\nThank you..!");
           $("#registeration").modal('hide'); 
        }
    }
}

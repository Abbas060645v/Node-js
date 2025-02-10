function validate(){
    var fn=frm.fname.value;
    localStorage.setItem("firstname",fn)
    for(x in fn){
        ch=fn.charCodeAt(x);
        if(ch<65 || ch>90 && ch<97 || ch>122)
        {
            alert("Inavlid firstname");
            return false;
        }
    }
    var ln=frm.lname.value;
    localStorage.setItem("Lastname",ln)
    for(y in ln){
        ch=ln.charCodeAt(y);
        if(ch<65 || ch>90 && ch<97 || ch>122)
        {
            alert("Inavlid lastname");
            return false;
        }
    }
    var phn=frm.phone.value;
    localStorage.setItem("Phone",phn)
    var lenp=phn.length;
    if(lenp!=10){
        alert("Phone no should be exactly 10 digits");
        return false;
    }
    var pwd1=frm.pwd.value;
    localStorage.setItem("Password",pwd1)
    var pwd1=pwd1.length;
    if(pwd1%2==1)
    {
        alert("Password should conatin evem number of cahracters");
        return false;
    }
    if(pwd1>8){
        alert("Password should not exceed 8 digits");
        return false;
    }
    var reg=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var mail=frm.mailid.value;
    localStorage.setItem("email",mail)
    if(reg.test(mail)){
        alert("Registered Sucessfully")
    }
    else{
        alert("Inavlid email")
        return false;
    }
    return true;
}  
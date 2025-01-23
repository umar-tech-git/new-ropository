function handleLogin(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('password').value;
    const errorMsg=document.getElementById('error');

    const LoginData=[
        {username:"username",password:"password"},
        {username:"u5",password:"umar123"},
    ]
    const isValid=LoginData.some((user)=>user.username===username && user.password === password);
    if(isValid){
        window.location.href="flexbox.html"
        errorMsg.innerText="Login SuccessFull"
    }
    else{
        errorMsg.innerText="Invalid Credentials"
    }

}
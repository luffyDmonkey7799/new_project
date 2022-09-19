
const formValidation = () => {
    const passwordRegex = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/
    const emailRegex = /.*@(\S+)$/


    const {value: userName} = document.getElementById('Username')
    const {value: email} = document.getElementById('Email-Address')
    const {value: password} = document.getElementById('psw')
    const {value: passwordRepet} = document.getElementById('psw-repeat')
    const {checked: captcha} = document.getElementById('captcha')

        if(userName.length <= 10){
            alert("Username length must be greater then 10 character.")
            return false;
        }

        if(!emailRegex.test(email)){
            alert("Please type @ in your email")
            return false;
          }

        if(!passwordRegex.test(password)){
            alert("Please use the lowercase, uppercase ,number and special character .")
            return false;
        }
    
        if(passwordRepet !== password){
            alert("Please enter the same valid password.")
            return false;
        }
    
        if(!captcha){
            alert("Please verify the captcha.")
            return false;
        }

        return true;

}
const myFunction = (login = false) => {
    try {
    const valid = formValidation()

    console.log(valid);
    
    if(valid){
            
            const {value: userName} = document.getElementById('Username')
            const {value: password} = document.getElementById('psw')
            const {value: email} = document.getElementById('Email-Address')
            
                        
            const [first_name,last_name] = userName.split(' ')
            fetch('http://localhost:8080/api/user',{
                method :"POST",
                headers : {
                    "content-type":"application/json",
                    "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3VydmV5LnNvZnRuZXAuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM4MzM1ODM1LCJleHAiOjIxNzgzMzU4MzUsIm5iZiI6MTYzODMzNTgzNSwianRpIjoiZVI5NkQ1WDRjWTdMOHVBSSIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.8ZQZBWIeP7kcOp-_JnoRzHMwwxNBiquwbnzSlnfZ7J8"
                },
                body:JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    password
                })
            });
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
  
}




  
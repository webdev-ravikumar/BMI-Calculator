const formSubmit = document.querySelector("#myForm");

formSubmit.addEventListener("submit", function(event){
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const result = document.querySelector("#result");

    //convert inches to meter
    const newHeight = height*0.0254;

    const finalResult = (weight/(newHeight*newHeight)).toFixed(2);
    result.innerHTML = finalResult;

    if(finalResult<=18.5){
        result.style.backgroundColor = "yellow";
    }
    if(finalResult==18.5 || finalResult<= 24.9){
        result.style.backgroundColor = "green";
    }
    if(finalResult>25 ){
        result.style.backgroundColor = "red";
    }

    // browsers refresh the form state when sending data to a server or 
    // reloading the page.
    // To prevent this, developers often use JavaScript to handle form 
    // submissions without refreshing the page. For instance, they can 
    // use the  method of the event object to stop the default behavior 
    // of the form. This allows them to process or validate the data while 
    // keeping it displayed in the form fields.

    event.preventDefault();
    
    // Optional - Reset Fields Manually
    // If you want to clear the form later, you can call the  method explicitly:
    // event.target.reset();

});
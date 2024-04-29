function sendMail() {
    console.log("Hi I am here");
    

    var params = {
        leadName: document.getElementById("name").value ? document.getElementById("name").value : "Name",
        email: document.getElementById("email").value ? document.getElementById("email").value : "abc@gmail.com",
        message: document.getElementById("message").value ? document.getElementById("message").value : "Message",
        subject: document.getElementById("subject").value ? document.getElementById("subject").value : "Subject",
        
    };


    const serviceID = "service_ccd3dws";
    const templateID = "template_h96vrkv";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("subject").value = "";
            
            

           

            console.log(res);
            alert("Your Data is Collected Successfully...");
        })
        .catch((err) => console.log(err));
}


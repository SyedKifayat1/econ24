function sendMail() {
    console.log("Hi I am here");
    

    var params = {
        leadName: document.getElementById("name").value ? document.getElementById("name").value : "Name",
        email: document.getElementById("email").value ? document.getElementById("email").value : "abc@gmail.com",
        cnic: document.getElementById("cnic").value ? document.getElementById("cnic").value : "00000-000000-0",
        contactNo: document.getElementById("contact").value ? document.getElementById("contact").value : "03000000000",
        instituteName: document.getElementById("institute").value ? document.getElementById("institute").value : "Institute",
         referenceCode: document.getElementById("reference_code").value ? document.getElementById("reference_code").value : "Reference Code",
       
        payment: document.getElementById("no_of_accommodations").value ? document.getElementById("no_of_accommodations").value : "payment"
    };


    const serviceID = "service_ccd3dws";
    const templateID = "template_h96vrkv";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            
            document.getElementById("cnic").value = "";
            document.getElementById("contact").value = "";
            document.getElementById("institute").value = "";
            document.getElementById("reference_code").value="";
            
            
            document.getElementById("no_of_accommodations").value = "";
            

            console.log(res);
            alert("Your Data is Collected Successfully...");
        })
        .catch((err) => console.log(err));
}


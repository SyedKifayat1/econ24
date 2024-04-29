function sendMail() {
    console.log("Hi I am here");
    

    var params = {
        leadName: document.getElementById("name").value ? document.getElementById("name").value : "Name",
        email: document.getElementById("email").value ? document.getElementById("email").value : "abc@gmail.com",
         cnic: document.getElementById("cnic").value ? document.getElementById("cnic").value : "00000-000000-0",
        contactNo: document.getElementById("contact").value ? document.getElementById("contact").value : "03000000000",
        instituteName: document.getElementById("institute").value ? document.getElementById("institute").value : "Institute",
        teamName: document.getElementById("team_name").value ? document.getElementById("team_name").value : "Team-Name",
        referenceCode: document.getElementById("reference_code").value ? document.getElementById("reference_code").value : "Reference Code",
        gammerTag: document.getElementById("leader_tag").value ? document.getElementById("leader_tag").value : "Leader Tag",
       member1Name: document.getElementById("member_name_1").value ? document.getElementById("member_name_1").value : "Member 1 Name",
        member1Cnic: document.getElementById("member_cnic_1").value ? document.getElementById("member_cnic_1").value : "Member 1 CNIC",
        member1Institute: document.getElementById("member_institute_1").value ? document.getElementById("member_institute_1").value : "Member 1 Institute",
        member1GammerTag: document.getElementById("member_tag_1").value ? document.getElementById("member_tag_1").value : "Member Tag 1",
        member2Name: document.getElementById("member_name_2").value ? document.getElementById("member_name_2").value : "Member Name 2",
        member2Cnic: document.getElementById("member_cnic_2").value ? document.getElementById("member_cnic_2").value : "Member 2 CNIC ",
        member2Institute: document.getElementById("member_institute_2").value ? document.getElementById("member_institute_2").value : "Member 2 Institute",
        member2GammerTag: document.getElementById("member_tag_2").value ? document.getElementById("member_tag_2").value : "Member tag 2",
        member3Name: document.getElementById("member_name_3").value ? document.getElementById("member_name_3").value : "Member 3 Name",
        member3Cnic: document.getElementById("member_cnic_3").value ? document.getElementById("member_cnic_3").value : "Member 3 CNIC",
        member3Institute: document.getElementById("member_institute_3").value ? document.getElementById("member_institute_3").value : "Member 3 Institute",
        member3GammerTag: document.getElementById("member_tag_3").value ? document.getElementById("member_tag_3").value : "Member tag 3",
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
            document.getElementById("leader_tag").value = "";
            document.getElementById("team_name").value = "";
            document.getElementById("reference_code").value = "";
            document.getElementById("member_name_1").value = "";
            document.getElementById("member_cnic_1").value = "";
            document.getElementById("member_institute_1").value = "";
            document.getElementById("member_name_2").value = "";
            document.getElementById("member_cnic_2").value = "";
            document.getElementById("member_institute_2").value = "";

            document.getElementById("member_name_3").value = "";
            document.getElementById("member_cnic_3").value = "";
            document.getElementById("member_institute_3").value = "";

            
           

            document.getElementById("no_of_accommodations").value = "";
            document.getElementById("member_tag_1").value = "";
            document.getElementById("member_tag_2").value = "";
            document.getElementById("member_tag_3").value = "";

            console.log(res);
            alert("Your Data is Collected Successfully...");
        })
        .catch((err) => console.log(err));
}


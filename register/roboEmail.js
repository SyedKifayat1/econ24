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
        roboWeight: document.getElementById("dimension").value ? document.getElementById("dimension").value : "Dimension",
        roboWeapon: document.getElementById("weapon").value ? document.getElementById("weapon").value : "Weapon",
        member1Name: document.getElementById("member_name_1").value ? document.getElementById("member_name_1").value : "Member 1 Name",
        member1Cnic: document.getElementById("member_cnic_1").value ? document.getElementById("member_cnic_1").value : "Member 1 CNIC",
        member1Institute: document.getElementById("member_institute_1").value ? document.getElementById("member_institute_1").value : "Member 1 Institute",
        member2Name: document.getElementById("member_name_2").value ? document.getElementById("member_name_2").value : "Member Name 2",
        member2Cnic: document.getElementById("member_cnic_2").value ? document.getElementById("member_cnic_2").value : "Member 2 CNIC ",
        member2Institute: document.getElementById("member_institute_2").value ? document.getElementById("member_institute_2").value : "Member 2 Institute",
        member3Name: document.getElementById("member_name_3").value ? document.getElementById("member_name_3").value : "Member 3 Name",
        member3Cnic: document.getElementById("member_cnic_3").value ? document.getElementById("member_cnic_3").value : "Member 3 CNIC",
        member3Institute: document.getElementById("member_institute_3").value ? document.getElementById("member_institute_3").value : "Member 3 Institute",
        member4Name: document.getElementById("member_name_4").value ? document.getElementById("member_name_4").value : "Member 4 Name",
        member4Cnic: document.getElementById("member_cnic_4").value ? document.getElementById("member_cnic_4").value : "Member 4 CNIC",
        member4Institute: document.getElementById("member_institute_4").value ? document.getElementById("member_institute_4").value : "Member 4 Institute",
         member5Name: document.getElementById("member_name_5").value ? document.getElementById("member_name_5").value : "Member 5 Name",
        member5Cnic: document.getElementById("member_cnic_5").value ? document.getElementById("member_cnic_5").value : "Member 5 CNIC",
        member5Institute: document.getElementById("member_institute_5").value ? document.getElementById("member_institute_5").value : "Member 5 Institute",
        member6Name: document.getElementById("member_name_6").value ? document.getElementById("member_name_6").value : "Member 6 Name",
        member6Cnic: document.getElementById("member_cnic_6").value ? document.getElementById("member_cnic_6").value : "Member 6 CNIC",
        member6Institute: document.getElementById("member_institute_6").value ? document.getElementById("member_institute_6").value : "Member 6 Institute",
        member7Name: document.getElementById("member_name_7").value ? document.getElementById("member_name_7").value : "Member 7 Name",
        member7Cnic: document.getElementById("member_cnic_7").value ? document.getElementById("member_cnic_7").value : "Member 7 CNIC",
        member7Institute: document.getElementById("member_institute_7").value ? document.getElementById("member_institute_7").value : "Member 7 Institute",
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
             document.getElementById("dimension").value = "";
            document.getElementById("weapon").value = "";
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

            document.getElementById("member_name_4").value = "";
            document.getElementById("member_cnic_4").value = "";
            document.getElementById("member_institute_4").value = "";

            document.getElementById("member_name_5").value = "";
            document.getElementById("member_cnic_5").value = "";
            document.getElementById("member_institute_5").value = "";

            document.getElementById("member_name_6").value = "";
            document.getElementById("member_cnic_6").value = "";
            document.getElementById("member_institute_6").value = "";

            document.getElementById("member_name_7").value = "";
            document.getElementById("member_cnic_7").value = "";
            document.getElementById("member_institute_7").value = "";

            document.getElementById("no_of_accommodations").value = "";
            
            console.log(res);
            alert("Your Data is Collected Successfully...");
        })
        .catch((err) => console.log(err));
}


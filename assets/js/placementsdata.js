const placementdata =[
    {
        id:1,
        name:"Prema",
        courseNmae: "Digital MArketing",
        image: "./assets/public/images/Deepan.png",
        comapnayName: "Bosh Pvt Ltd.",
        position: "Digital MArketing Specialist",
        companyLogo:"./assets/public/images/zoho-logo.png",
        color:"rgba(233,122,198)",
        ctc:""

    },
    {
        id:2,
        name:"Karthikeyan.k",
        courseNmae: "Graphic Designing",
        image: "./assets/public/images/face2.png",
        comapnayName: "Tata Consultancy Services",
        position: "Graphic Designer",
        companyLogo:"./assets/public/images/zoho-logo.png",
        color:"rgba(0,216,191)",
        
        ctc:"7.2"

    },
    {
        id:3,
        name:"Suthan",
        courseNmae: "Video & Flim Editing",
        image: "./assets/public/images/Naveen.png",
        comapnayName: "Director Vinu",
        position: "Assistant Director",
        companyLogo:"./assets/public/images/zoho-logo.png",
        color:"rgba(162,130,239)",

        ctc:"4"

    },
    {
        id:4,
        name:"Shyam Sundar",
        courseNmae: "UX UI Design Course",
        image: "./assets/public/images/Screenshot_42.png",
        comapnayName: "Applied Materials",
        position: "Associate Software Engineer",
        companyLogo:"./assets/public/images/zoho-logo.png",
        color:"rgba(233,122,198)",
        ctc:""

    },
    {
        id:5,
        name:"Prasanth D",
        courseNmae: "Web Designing & Development",
        image: "./assets/public/images/Screenshot_43.png",
        comapnayName: "Cognizant",
        position: "IT Programmer Trainee",
        companyLogo:"./assets/public/images/zoho-logo.png",
        color:"rgba(0,216,191)",
        ctc:"2.5"

    },
    {
        id:6,
        name:"Kalanidhi",
        courseNmae: "Video Editing Course",
        image: "./assets/public/images/kalanidhi.png",
        comapnayName: "TrickShot Studio",
        position: "Editor",
        companyLogo:"./assets/public/images/zoho-logo.png",
        color:"rgba(162,130,239)",
        ctc:""

    },


]



$.each(placementdata,function(i,e){
    $('.placement-cards-wrapper').append(` 
    <div class="placement-card">
            <div class="left" style="background:` + e.color + ` ">
                    <div>placement</div>
                        <div><img src=` + e.image + ` alt=""></div>
                        <div><img src= ` + e.companyLogo + ` alt=""></div>
                        <div>CTC</div>
                        <div>` + e.ctc + `L/annum</div>                         
                    </div>
                        
                    <div class="right">
                    <div> <img src="./assets/public/images/Artboard 6.png" alt=""></div>
                    <div>` + e.name + `</div>
                    <div>` + e.courseNmae + `</div>
                    <div>` + e.position + `</div>
                    <div>@</div>
                    <div>` + e.comapnayName + `</div>
                    </div>
            </div>` )

})


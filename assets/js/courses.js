

                            // {
                            //     id:1,
                            //     course:"web Design & Development",
                            //     image:{
                            //         off:"./assets/public/images/wdd1.png",
                            //         on:"./assets/public/images/wdd2.png"
                            //     },
                            //     duration: {
                            //         off:4,
                            //         on:6,
                            //     },
                            //     session:{
                            //         off:50,
                            //         on:70,
                            //     },
                            //     hours:{
                            //         off:75,
                            //         on:105,
                            //     },
                            //     sofwares:{
                            //         off:8,
                            //         on:10,
                            //     },
                            //     rating:{
                            //         off:4.8,
                            //         on:4.9,
                            //     },
                            //     ratingCount:{
                            //         off:56,
                            //         on:26,
                            //     },
                            //     link:{
                            //         off:"#",
                            //         on: "#"
                            //     },
                            //  
                                
                        
                            // },

const offlineCoursesData=[
    {
        id:1,
        course:"UX UI Design",
        image:"./assets/public/images/uxui1.jpg",
        duration: 5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
     
     
    },
    {
        id:2,
        course:"Web Design & Development",
        image:"./assets/public/images/wdd1.png",
        duration: 6,
        session:75,
        hours:120,
        sofwares:12,
        rating:4.9,
        ratingCount:56,
        link:"#",
     

    },
    {
        id:3,
        course:"Digital Marketing",
        image:"./assets/public/images/dm1.jpg",
        duration: 4,
        session:50,
        hours:80,
        sofwares:8,
        rating:4.6,
        ratingCount:136,
        link:"#",
     

    },
    {
        id:4,
        course:"Graphic Designer",
        image:"./assets/public/images/gd.webp",
        duration: 4,
        session:40,
        hours:50,
        sofwares:12,
        rating:5,
        ratingCount:305,
        link:"#",
        

    },
    {
        id:5,
        course:"Data SCience",
        image:"./assets/public/images/ds1.jpeg",
        duration:4,
        session:45,
        hours:48,
        sofwares:7,
        rating:5,
        ratingCount:1,
        link:"#",
        
     

    },
]

const onlineCoursesData=[
    {
        id:1,
        course:"UX UI Design",
        image:"./assets/public/images/uxui2.jpg",
        duration: 5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
       
    },
    {
        id:2,
        course:"Web Design & Development",
        image:"./assets/public/images/wdd2.jpg",
        duration: 5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
        

    },
    {
        id:3,
        course:"Digital Marketing",
        image:"./assets/public/images/dm2.jpg",
        duration: 5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
     

    },
    {
        id:4,
        course:"Data Science",
        image:"./assets/public/images/ds2.png",
        duration: 5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
        

    },
    {
        id:5,
        course:"Advances Graphic Designer",
        image:"./assets/public/images/gd1.jpg",
        duration:5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
     

    },
    {
        id:6,
        course:"Flim Editing",
        image:"./assets/public/images/uxui1.jpg",
        duration:5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
        

    },
    {
        id:7,
        course:"Designer Pro",
        image:"./assets/public/images/gd1.jpg",
        duration:5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",


    },
]
const popularCoursesData=[
    {
        id:1,
        course:"Advances Graphic Designer",
        image:"./assets/public/images/gd1.jpg",
        duration:5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
      
    },
    {
        id:2,
        course:"UX UI Design",
        image:"./assets/public/images/uxui1.jpg",
        duration: 5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",

    },
    {
        id:3,
        course:"Flim Editing",
        image:"./assets/public/images/ds1.jpeg",
        duration:5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",

    },
    {
        id:4,
        course:"Digital Marketing",
        image:"./assets/public/images/dm2.jpg",
        duration: 5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
     

    },
    {
        id:5,
        course:"Web Design & Development",
        image:"./assets/public/images/wdd2.jpg",
        duration: 5,
        session:60,
        hours:90,
        sofwares:10,
        rating:4.5,
        ratingCount:156,
        link:"#",
      

    },
]

{/* <div class="courses-card">
                                <div class="video">
                                    <img src="./assets/public/images/how-important-uiux-V2-2.jpg"  alt="">
                                </div>
                                <div class="details">
                                    <div>
                                        <div>
                                            <div><i class="fa-regular fa-calendar"></i> 5 Months <i class="bi bi-dash-lg"></i></div>
                                            <div><i class="fa-solid fa-tv"></i> 60 Sessions </div>
                                        </div>
                                        <div>
                                            <div><i class="fa-regular fa-clock"></i> 90 Hours <i class="bi bi-dash-lg"></i></div>
                                            <div><i class="fa-solid fa-screwdriver-wrench"></i> 10 Softwares covered </div>
                                        </div>
                                    </div>
                                    <div class="cta-viewall"  ><button>Learn more</button></div>
                                </div> 
                                <div class="rating">4.5 <i class="bi bi-star-fill"></i> (156)</div>
                                <div class="course-title">UX UI Design</div>   
                            </div> */}

// $(document).ready(function(){

    
// tabs= $(".courses-card-wrapper")

// tabs.each(function(i,e){
    
//     let type= $(this).attr('id')
//     console.log(type);

//     const  selectData = function(){
//         if(type === "popular"){
//             return popularCoursesData;
     
//          }else if(type === "offline"){
//              return offlineCoursesData;
     
//          }else{
//             return onlineCoursesData;
//          }
//     }
//     let val =selectData();
//     $.each(val,function(i,e){
//         $(`#` + type + ``).append(`<h1>` + e.name + `</h1>`)
//     })
// })

// })


$.each(popularCoursesData,function(i,e){
   
            $("#popularCoursesData").append(
                                `<div class="courses-card">
                                <div class="video">
                                    <img src=` + e.image +`  alt="">
                                </div>
                                <div class="details">
                                    <div>
                                        <div>
                                            <div><i class="fa-regular fa-calendar"></i>` + e.duration  + ` Months <i class="bi bi-dash-lg"></i></div>
                                            <div><i class="fa-solid fa-tv"></i>` + e.session + ` Sessions </div>
                                        </div>
                                        <div>
                                            <div><i class="fa-regular fa-clock"></i> ` + e.hours + ` Hours <i class="bi bi-dash-lg"></i></div>
                                            <div><i class="fa-solid fa-screwdriver-wrench"></i>` + e.sofwares + ` Softwares covered </div>
                                        </div>
                                    </div>
                                    <div class="cta-viewall"  ><button>Learn more</button></div>
                                </div> 
                                <div class="rating"> ` + e.rating + ` <i class="bi bi-star-fill"></i> (` + e.ratingCount +  `)</div>
                                <div class="course-title">` + e.course  +  `</div>   
                            </div>`
            )
        })


        $.each(offlineCoursesData,function(i,e){
   
            $("#offlineCoursesData").append(
                                `<div class="courses-card">
                                <div class="video">
                                    <img src=` + e.image +`  alt="">
                                </div>
                                <div class="details">
                                    <div>
                                        <div>
                                            <div><i class="fa-regular fa-calendar"></i>` + e.duration  + ` Months <i class="bi bi-dash-lg"></i></div>
                                            <div><i class="fa-solid fa-tv"></i>` + e.session + ` Sessions </div>
                                        </div>
                                        <div>
                                            <div><i class="fa-regular fa-clock"></i> ` + e.hours + ` Hours <i class="bi bi-dash-lg"></i></div>
                                            <div><i class="fa-solid fa-screwdriver-wrench"></i>` + e.sofwares + ` Softwares covered </div>
                                        </div>
                                    </div>
                                    <div class="cta-viewall"  ><button>Learn more</button></div>
                                </div> 
                                <div class="rating"> ` + e.rating + ` <i class="bi bi-star-fill"></i> (` + e.ratingCount +  `)</div>
                                <div class="course-title">` + e.course  +  `</div>   
                            </div>`
            )
        })



        $.each(onlineCoursesData,function(i,e){
   
            $("#onlineCoursesData").append(
                                `<div class="courses-card">
                                <div class="video">
                                    <img src=` + e.image +`  alt="">
                                </div>
                                <div class="details">
                                    <div>
                                        <div>
                                            <div><i class="fa-regular fa-calendar"></i>` + e.duration  + ` Months <i class="bi bi-dash-lg"></i></div>
                                            <div><i class="fa-solid fa-tv"></i>` + e.session + ` Sessions </div>
                                        </div>
                                        <div>
                                            <div><i class="fa-regular fa-clock"></i> ` + e.hours + ` Hours <i class="bi bi-dash-lg"></i></div>
                                            <div><i class="fa-solid fa-screwdriver-wrench"></i>` + e.sofwares + ` Softwares covered </div>
                                        </div>
                                    </div>
                                    <div class="cta-viewall"  ><button>Learn more</button></div>
                                </div> 
                                <div class="rating"> ` + e.rating + ` <i class="bi bi-star-fill"></i> (` + e.ratingCount +  `)</div>
                                <div class="course-title">` + e.course  +  `</div>   
                            </div>`
            )
        })


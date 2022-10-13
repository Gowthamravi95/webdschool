const testimonalcarddata=[
    {
        id:1,
        name:"EVANGELINE",
        courseNmae: "UX UI Design course",
        image: "./assets/public/images/Screenshot_42.png",
        review:"I am pursuing my UX/UI course in WebD School. I found the best professional training institute where I could enhance my skills, experience and knowledge with practical guidance. I would recommend WebD School to those people who are looking for career enhancement in their core.",
    },
    {
        id:2,
        name:"KRITHYA",
        courseNmae: "Graphic Designing course",
        image: "./assets/public/images/face2.png",

        review:"Web D School is a right choice for students like me who has ZERO knowledge on Graphic Designing.They teach everything right from the scratch. The trainers there are super supportive and available at any point of the day.",
    },
    {
        id:3,
        name:"KALAIYARASAN",
        courseNmae: " Graphic Designing course",
        image: "./assets/public/images/Screenshot_43.png",

        review:"I attended the Graphic Design Course at Web D School and it was an extremely knowledgeable and useful learning experience. Great Trainers with high subject knowledge - they are very friendly & supportive. ",
    },
    {
        id:4,
        name:"SRIRANJANI",
        courseNmae: "Digital Marketing course",
        image: "./assets/public/images/Testimonial1.webp",
        review:"I have completed Digital Marketing course @ Web D School. Getting trained here was a tremendousexperience, & the trainers were too friendly! Students get the right guidance & assistance for the career enhancement from the placement cell. Thanks a lot for providingsuch great training.",
    },
    {
        id:5,
        name:"VENKAT",
        courseNmae: "Web Design & development course",
        image: "./assets/public/images/Kalanidhi.png",
        review:"I have completed Front end development course here. It’s worthy to learn all designing & development courses at Web D School. A very good training system, and trainer teach all theconcepts clearly. Thank u Web D School.",
    },
    // {
    //     id:6,
    //     name:"AMMAM ULLAH",
    //     courseNmae: "UX UI Design course",
    //     image: "./assets/public/images/Deepan.png",
    //     review:"I'm currently pursuing UI UX design course at Web D School. This is an excellent institute where you can learn things practically and explore new technology in the designing fields. Trainers at Web D School are friendly and motivate us to attain ourgoal.",
    // },
]



$.each(testimonalcarddata, function (key, e) {
    $(".student-review-wrapper").append(`
        <div class="student-review">
            <div class="student-review-image">
                <div class="student-review-content-title">
                    <span>` + e.name + `</span>
                    <br>`+ " " + '-' + " "  + e.courseNmae + `
                </div>
                <img src=` + e.image + ` alt="">
            </div>
            <div class="student-review-content">
                <div class="student-review-content-description">` + e.review + `</div>
            </div>
        </div> `)
});

$.each(testimonalcarddata, function (key, e) {
    $(".student-review-wrapper-vertical").append(`<div class="student-review"><div class="student-review-image"><div class="student-review-content-title"><span>` + e.name + `</span>`+ " " + '-' + " "  + e.courseNmae + `</div><img src=` + e.image + ` alt=""></div><div class="student-review-content"><div class="student-review-content-description">` + e.review + `</div></div></div> `)
});

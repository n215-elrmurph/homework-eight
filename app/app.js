//Variables
var homeContent = `<div class="hero"></div>
<div class="content">
    <h1>TAKE A TOUR OF CAMPUS</h1>
    <a><div class="explore-IUPUI">EXPLORE IUPUI</div></a>

    <div class="images">
        <div class="image">
            <img src="images/1.jpeg" alt="image one">
        </div>
        <div class="image">
            <img src="images/2.jpeg" alt="image two">
        </div>
        <div class="image">
            <img src="images/3.jpeg" alt="image three">
        </div>
    </div>

    <div class="getToKnow-IUPUI">
        <img src="images/campus.webp" alt="">
        <div class="know-IUPUI">
            <div class="title">GET TO KNOW IUPUI</div>
            <div class="student-count">27,690</div>
            <div class="student-title">STUDENTS</div>
            <div class="undergradPercent">85.8%</div>
            <div class="undergradTitle">OF UNDERGRADS RECEIVE FINANCIAL AID</div>
            <div class="programNumber">550+</div>
            <div class="programTitle">ACADEMIC PROGRAMS</div>
        </div>
    </div>

    <div class="ready">
        <div class="readyTitle">Ready to take the next step?</div>
        <div class="buttons">
            <div class="request">Request Information</div>
            <div class="plan">Plan a Visit</div>
            <div class="learn">Learn How to Apply</div>
        </div>
    </div>
</div>`;

var aboutContent = ` <div class="hero"></div>
<div class="content">
    <h1>The Future Begins Here</h1>
    <p>27,690 undergraduate, graduate and professional students call IUPUI home.<br> Jaguars come together from 49 states and more than 144 countries to IUPUI<br> to earn their choice of an Indiana University or Purdue University degree while<br> living and learning in downtown Indianapolis.</p>
    <div class="jaguar">Apply to become a Jaguar</div>

    <div class="applicants">
        <div class="row1">
            <div class="applicant">Freshman Applicants
                <p>Applicants who are currently in highschool</p>
            </div>
            <div class="applicant">Transfer Applicants
                <p>Applicants transferring from a four-year college or university or a community college</p>
            </div>
            <div class="applicant">Intercampus Transfer Applicants
                <p>Applicants transferring from another Indiana University campus</p>
            </div>
        </div>
        <div class="row2">
            <div class="applicant">Returning Adult Applicants
                <p>Applicants returning to college as adults to complete a bachelor's degree</p>
            </div>
            <div class="applicant">Graduate Applicants
                <p>Applicants cwho have a bachelor's degree and want to pursure graduate study at IUPUI</p>
            </div>
            <div class="applicant">International Applicants
                <p>Applicants seeking or holding nonimmigrant student visas</p>
            </div>
        </div>
    </div>

    <div class="image-rows">
        <div class="iupui-images">
            <img src="images/artSchool.jpeg" alt="art school">
        </div>
        <div class="iupui-images">
            <img src="images/dentistry.jpeg" alt="dentistry school">
        </div>
        <div class="iupui-images">
            <img src="images/dorms.jpeg" alt="dorm image">
        </div>
    </div>
</div>`;

var productsContent = `<div class="hero"></div>
<div class="content">
    <h1>A Partnership Like No Other</h1>
    <p class="academics-paragraph">Top-ranked Indiana University and Purdue University come together at IUPUI to offer<br> an unparalleled academic experience. We offer more than 550 degrees from IU and<br> Purdue with classes taught by nationally-ranked professors. Take advantage of an<br> affordable education and opportunities that can only be found in Indianapolis.</p>
    <div class="academic-buttons">
        <div class="explore">Explore majors by interest</div>
        <div class="learn-programs">Learn about IU and Purdue programs</div>
    </div>

    <div class="red-space">
        <div class="block1">
            <div class="block1-title">17</div>
            <div class="block1-words">DEGREE-GRANTING SCHOOLS</div>
        </div>
        <div class="block2">
            <div class="block2-title">550+</div>
            <div class="block2-words">DEGREES & MAJORS</div>
        </div>
    </div>

    <div class="academics-image">
        <img src="images/academics2.jpeg" alt="academic image">
        <img src="images/academics.jpeg" alt="academic image">
    </div>
    

    <div class="content2">
        <h1 class="content2-title">Learn. Investigate. Create.<br> Innovate. Discover. Lead.</h1>
        <p class="content2-words">As Indiana's premier urban research university, our students put what they learn into action before they graduate. At IUPUI, you'll be able to conduct research, work hand in hand with community leaders, get hands-on experience in your field, and expand your worldview from a global perspective through engaged learning.</p>
    </div>
</div>`;

var contactContent = `<div class="hero"></div>
<div class="content">
    <h1 class="alumni-title">IUPUI has over 206,000 living alumni</h1>
    <p class="alumni-words">Once you graduate from IUPUI, you'll be able to join either the Indiana University Alumni Association or<br> the Purdue Alumni Association. You'll also automatically become a member of the Alumni Association for the IUPUI school<br> from which you graduated.</p>
    <img src="images/alumni.png" alt="alumni image" class="alumni-image">

    <div class="red-area">
        <h1 class="support-title">Stay Involved & Support IUPUI</h1>
        <div class="support-options">
            <div class="option">Give Now</div>
            <div class="option">Get Involved with the IU Foundation</div>
            <div class="option">Join the IU Alumni Association</div>
            <div class="option">Join the Purdue Alumni Association</div>
        </div>
    </div>

    <div class="grey-area">
        <h1 class="help-students">Help IUPUI Students In Crisis</h1>
        <p class="crisis-words">As the worst public health crisis of this generation, the COVID-19 pandemic is forcing many of our students to face unforeseen hardships—from food and housing instability to unexpected medical bills. For those who are able to help, please consider giving to support students in urgent need.</p>
        <div class="support">Support the IUPUI family</div>
        
    </div>
    <img src="images/alumni2.jpeg" alt="graduation image" class="grad-image">
</div>`;


//Functions 
function initListeners(){
    $("nav a").click(function(e){
            let btnID = e.currentTarget.id; 
            loadPageContent(btnID);
            // console.log("click " + contentID);   
    }) 
}

function loadPageContent(pageName){
    let contentID = pageName + "Content";
    $("#app").html(eval(contentID));
}


function initApp(){
    initListeners();
}


$(document).ready(function(){
    loadPageContent("home");
    initApp();
});
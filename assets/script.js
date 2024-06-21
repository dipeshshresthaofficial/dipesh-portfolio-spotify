// hiding all 
function hiddingBlocks(classNameOfBlocks){
    let collectiveRef = document.querySelectorAll("."+classNameOfBlocks);
    collectiveRef.forEach(item=>{
        item.style.display = "none";
    })
}
// hidding all education descriptions
hiddingBlocks("edu-desc");
// hidding all experience descriptions
hiddingBlocks("exp-desc");

// displaying the active ones
function handleActiveBlock(activeHeaderBtnClassName){
    let activeRef = document.getElementsByClassName(activeHeaderBtnClassName);
    console.log(activeRef)
    if(activeRef.length > 0){
        console.log((activeRef[0].id.split("-")[0]).toString()+"-desc-"+(activeRef[0].id.split("-")[2]).toString())
        let correspondingActiveDescId = (activeRef[0].id.split("-")[0]).toString()+"-desc-"+(activeRef[0].id.split("-")[2]).toString();
        let correspondingActiveDescRef = document.getElementById(correspondingActiveDescId);
        correspondingActiveDescRef.style.display = "block";
    }
}

// displaying only the active education
handleActiveBlock("edu-active");
// displaying only the active experience
handleActiveBlock("exp-active");

// Toggle feature of Sidebar Section:
const sidebarItems = document.querySelectorAll('.sidebar-item');
sidebarItems.forEach(item =>{
    item.addEventListener('click',e=>{
        sidebarItems.forEach(item=>{
            if(item.parentElement.classList.contains('sidebar-active')){
                item.parentElement.classList.remove('sidebar-active');
            }
        })
        item.parentElement.classList.add('sidebar-active');
        // console.log(item.id);
        if(window.matchMedia("(max-width: 768px)")){
            document.getElementById("toggle").checked = false;
        }
    })
})

// Toggle feature of Education Section
const eduBtn = document.querySelectorAll('.edu-btn');
eduBtn.forEach(btn=>{
    btn.addEventListener('click',e=>{
        //Accessing id of the clicked education button
        var id = e.target.id.split('-').pop();

        eduBtn.forEach(btn=>{
            if(btn.classList.contains('edu-active')){
                btn.classList.remove('edu-active');
                btn.querySelector("span").style.color="#5a5656";
            }
        })

        // Referencing clicked button
        const activeEduBtn = document.getElementById(e.target.id);
        // Making clicked element active by adding active class
        activeEduBtn.classList.add('edu-active');

        hiddingBlocks("edu-desc");
        
        handleActiveBlock("edu-active");
    });
})

// Toggle Feature of Experience Section
const expBtnRef = document.querySelectorAll('.exp-btn');
// document.getElementsByClassName("exp-active").querySelector("span").style.color="white";
expBtnRef.forEach(btn => {
    btn.addEventListener('click',e=>{
        
        // Since button is clicked so previously active button is made inactive
        expBtnRef.forEach(btn => {
            if(btn.classList.contains('exp-active')){
                btn.classList.remove('exp-active');
                btn.querySelector("span").style.color="#5a5656";
            }
        })
        
        // accessing target button id
        const id = e.target.id;
        // console.log(id);
        // referencing target button
        const activeExpBtn = document.getElementById(id);
        // Making clicked button active
        activeExpBtn.classList.add('exp-active');
        let spanEle = activeExpBtn.querySelector("span");
        spanEle.style.color="#1DB954";

        hiddingBlocks("exp-desc");
        
        handleActiveBlock("exp-active");
        // console.log(targetDescId);

    })
})

// Submit Email Logic of SMTPJS : https://smtpjs.com/

function sendEmail(){

    Email.send({
        SecureToken: "c2dcb4c7-b970-43c9-9ab9-098ab85bca3f",
        To : 'dev.dipesh.info@gmail.com',
        From : "dev.dipesh.info@gmail.com",
        Subject : document.getElementById('msg_sub').value,
        Body : "Name: "+document.getElementById('fname').value+" "+document.getElementById('lname').value+"<br>Email Id: "+document.getElementById('email').value+"<br>Message Body: "+document.getElementById('msg').value
    }).then(
      message => alert("Email sent successfully. I will get back to you soon. Thank you!")
    );
}


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
            }
        })

        // Referencing clicked button
        const activeEduBtn = document.getElementById(e.target.id);
        // Making clicked element active by adding active class
        activeEduBtn.classList.add('edu-active');

        const eduDescRef = document.querySelectorAll('.edu-desc');
        eduDescRef.forEach(item=>{
            if(item.style.display !== 'none'){
                item.style.display = 'none';
            }
        })
        
        // processing id for education description of corresponding clicked button
        var panelId = "edu-desc-"+id.toString();
        // referencing education description of corresponding clicked button
        var displayEduPanel = document.getElementById(panelId);
        // displaying education description of corresponding clickedd button
        displayEduPanel.style.display='block';
    });
})

// Toggle Feature of Experience Section
const expBtnRef = document.querySelectorAll('.exp-btn');
expBtnRef.forEach(btn => {
    btn.addEventListener('click',e=>{
        // Since button is clicked so previously active button is made inactive
        expBtnRef.forEach(btn => {
            if(btn.classList.contains('exp-active')){

                btn.classList.remove('exp-active');
            }
        })
        
        // accessing target button id
        const id = e.target.id;
        // console.log(id);
        // referencing target button
        const activeExpBtn = document.getElementById(id);
        // Making clicked button active
        activeExpBtn.classList.add('exp-active');

        const expDescRef = document.querySelectorAll('.exp-desc');
        expDescRef.forEach(item=>{
            if(item.style.display !== "none"){
                item.style.display = "none";
            }
        })
        
        const targetDescId = 'exp-desc-'+ (e.target.id.split('-').pop()).toString();
        const targetDescRef = document.getElementById(targetDescId);
        targetDescRef.style.display = 'block';
        // console.log(targetDescId);

    })
})


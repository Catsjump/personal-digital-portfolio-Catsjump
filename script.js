let slider = document.getElementById('imageRange');
slider.addEventListener("input", imageOpacity);
image2 = document.querySelector(".img2")


document.querySelector(".vr").addEventListener("click", showProject.bind(showProject, 1));
document.querySelector(".leaf").addEventListener("click", showProject.bind(showProject, 2));
document.querySelector(".funnyBox").addEventListener("click", showProject.bind(showProject, 3));

document.querySelector(".close").addEventListener("click", close);

function close(){
    document.querySelector(".projectsWindow").style.display = "none";
}




function showProject(projectNum){
    document.querySelector(".projectsWindow").style.display = "block";
    if (projectNum == 1){
        document.querySelector(".projectTitle").textContent = "VR Gloves"
        document.querySelector(".projectText").textContent = vrText
        document.querySelector(".projectLink").href = "https://github.com/LucidVR/lucidgloves"
        document.querySelector(".projectLink").textContent = "Here's a link to the github!"
        document.querySelector(".projectImg").src = "images/hapticgloves.jpg"
        document.querySelector(".projects").style.display = "block";
    }else if (projectNum == 2){
        document.querySelector(".projectTitle").textContent = "Nanoleaf Panels"
        document.querySelector(".projectText").textContent = leafText
        document.querySelector(".projectImg").src = "images/nanoleaf.jpg"
        document.querySelector(".projectLink").textContent = "Here's a link to the project!"
        document.querySelector(".projectLink").href = "https://www.thingiverse.com/thing:3230905"
        document.querySelector(".projects").style.display = "block";
    }else if (projectNum == 3){
        document.querySelector(".projectTitle").textContent = "uhhh... just a normal box"
        document.querySelector(".projectText").textContent = boxText
        document.querySelector(".projectImg").src = "images/normalbox.jpg"
        document.querySelector(".projectLink").href = ""
        document.querySelector(".projectLink").textContent = ""
        document.querySelector(".projectsWindow").style.display = "block";
    }else{
        alert("ur trash at programming")
        alert(projectNum)
    }
    
}



function imageOpacity(){
    rangeInput = document.getElementById("imageRange").value;
    opacity1 = rangeInput * 0.1
    image2.style.opacity = opacity1
}






//text variables

let vrText = "These are the haptic VR gloves that I'm currently working on, It's a project made and designed by Lucas VRTech. It consists of servos, potientiometers, an ESP-WROOM-32 board and a bunch of 3d printed parts."

let leafText = "cool light panel"

let boxText = "..."


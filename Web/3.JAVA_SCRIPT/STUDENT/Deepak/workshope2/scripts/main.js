var applicantList = [
    { name: "Alex", image: "images/m1.png",  experience: "2 years", education: "MCA",location: "guruvayur"},
    { name: "Ameya", image: "./images/m2.png",  experience: "2 years", education:"BCA",location: "chavakkad" },
    { name: "Ommer", image: "./images/m1.png", experience: "4 years", education:"BCA COM",location: "pavarty" },
];
listApplicants();
function listApplicants() {
    var contentDiv = document.getElementById('card');
    var content = document.getElementById('content');
   
   for(let value in applicantList) {

        //creating div for each item in the array
        var cardDiv = document.createElement('p');
        var image = document.createElement('img');
        image.src = applicantList[value].image;
        var edu = document.createElement('p');
        edu.textContent = applicantList[value].education;
        var name=document.createElement('b');
        name.textContent = applicantList[value].name;
        var experience=document.createElement('p');
        experience.textContent=applicantList[value].experience;
        var location = document.createElement('p');
        location.textContent = applicantList[value].location;
        // console.log(item.image);
        cardDiv.appendChild(image);
        cardDiv.appendChild(name);
        cardDiv.appendChild(experience);
        cardDiv.appendChild(edu);
        cardDiv.appendChild(location);
        contentDiv.appendChild(cardDiv);
   
   }
    
}

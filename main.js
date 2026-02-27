const elList = document.querySelector(".list")

elList.innerHTML = ""


for(student of students) {
    elList.innerHTML += `
    <li class="item">
            <div class="div">
            <img src="${student.image}" alt="" class="item-img">
               <div>
                <h3 class="title">${student.fullName}</h3>
                <p class="text">${student.level}</p>
               </div>
            </div>
            <p class="info"><strong>📘Kurs: ${student.course}</strong></p>
            <p class="info"><strong>🎂Yosh: ${student.age}</strong></p>
            <p class="info"><strong>📞Tel: ${student.phone}</strong></p>
        </li>
    `
}
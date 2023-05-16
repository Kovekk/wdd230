function addChapter() {
    const chapter = document.querySelector("#favchap");
    const favList = document.querySelector("#list");
    console.log(chapter)

    const newLi = document.createElement("li");
    newLi.textContent = chapter;

    favList.appendChild(newLi);
}


const addButton = document.querySelector("button");
addButton.addEventListener("click", addChapter);
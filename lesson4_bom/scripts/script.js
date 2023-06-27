function addChapter() {
    const chapter = document.querySelector("#favchap");
    if (chapter.value == "") {
        document.querySelector("main p").classList.add("noEntry");
    } else {
        document.querySelector("main p").classList.remove("noEntry");
        const favList = document.querySelector("#list");

        const newLi = document.createElement("li");
        newLi.textContent = chapter.value;
        chapter.value = "";

        const deleteBtn = document.createElement("input");
        deleteBtn.setAttribute("type", "button");
        deleteBtn.setAttribute("value", "X");
        deleteBtn.setAttribute("class", "delete-button");
        deleteBtn.addEventListener("click", delChapter);

        newLi.appendChild(deleteBtn);
        favList.appendChild(newLi);

        chapter.focus()
    }
}

function delChapter(self) {
    const chapter = self.srcElement.parentElement;
    chapter.remove();

    const textElement = document.querySelector("#favchap");
    textElement.focus();
}


const addButton = document.querySelector("#button");
addButton.addEventListener("click", addChapter);
function search() {
    let input = document.querySelector(".search-input").value.toLowerCase();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        let title = box.querySelector("h2").innerText.toLowerCase();
        if (title.includes(input)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}


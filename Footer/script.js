const listOptions = Array.from(document.querySelectorAll("#footer h3"));

listOptions.forEach((option) => {
    option.addEventListener("click", function(event) {
        event.target.nextSibling.nextSibling.classList.toggle("list-on");
    })
})
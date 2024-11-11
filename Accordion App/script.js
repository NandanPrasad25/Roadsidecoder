const sections = [
    {title: "Section 1", content: "This is the content for Section 1"},
    {title: "Section 2", content: "This is the content for Section 2"},
    {title: "Section 3", content: "This is the content for Section 3"},
]

document.addEventListener("DOMContentLoaded" ,function() {
    const accordion = document.querySelector("#accordion");

    sections.forEach((section, index) => {
        const accordionItem = document.createElement("div");
        accordionItem.className = "accordionItem";

        const accordionHeader = document.createElement("div");
        accordionHeader.className = "accordionHeader";
        accordionHeader.innerText = section.title;

        const accordionContent = document.createElement("div");
        accordionContent.className = "accordionContent";
        accordionContent.innerHTML = `<p>${section.content}</p>`;

        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionContent);

        accordion.appendChild(accordionItem);

        if(index === 0) {
            accordionItem.classList.add("active");
            accordionContent.style.display = "block";
        }

        else {
            accordionContent.style.display = "none"
        }
    })

    accordion.addEventListener("click", function(event) {
        const targetHeader = event.target.closest(".accordionHeader");
        if (!targetHeader) return;

        const targetItem = targetHeader.parentNode;
        const targetContent = targetItem.querySelector(".accordionContent");

        const isActive = targetItem.classList.contains("active");

        document.querySelectorAll(".accordionItem").forEach((item) => {
            item.classList.remove("active");
            item.querySelector(".accordionContent").style.display = "none"
        })
        
        if (!isActive) {
            targetItem.classList.add("active");
            targetContent.style.display = "block";
        }
        
    })
})
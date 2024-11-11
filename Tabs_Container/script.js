const tabsData = [
  { id: "tab1", title: "Tab1", content: "This is the content for the Tab 1" },
  { id: "tab2", title: "Tab2", content: "This is the content for the Tab 2" },
  { id: "tab3", title: "Tab3", content: "This is the content for the Tab 3" },
];

document.addEventListener("DOMContentLoaded", function () {
    let activeTab = tabsData[0].id;

    function renderTabs() {

        const tabsContainer = document.querySelector(".tabsContainer");
        const tabsContentContainer = document.querySelector(".tabsContentContainer");


        tabsData.forEach(tab => {
            const tabButton = document.createElement("button");
            tabButton.class = "tabLinks";
            tabButton.textContent = tab.title;
            tabButton.setAttribute("data-tab", tab.id);
            tabsContainer.appendChild(tabButton)


            const tabContent = document.createElement("div");
            tabContent.id = tab.id;
            tabContent.class = "tabContent";
            tabContent.innerHTML = `<h3>${tab.title}</h3><p>${tab.content}</p>`;
            tabsContentContainer.appendChild(tabContent);


            tabsContainer.addEventListener("click", function(event) {
                if(event.target.matches(".tabLinks")) {
                    const tabId = tabButton.getAttribute("data-tab"); 
                    if(activeTab !== tabId) {
                        openTabs(tabId);
                        activeTab = tabId;
                    }
                }
            })
        })

// matches function not working and rest of the code is set to run.
        

        function openTabs(tabId) {
            const tabContents = document.querySelectorAll(".tabContent");
            const tabLinks = document.querySelectorAll("tabLinks");

            tabContents.forEach(tabContent => tabContent.classList.remove("active"))
            tabLinks.forEach(tabLink => tabLink.classList.remove("active"))

            document.getElementById(tabId).classList.add("active");
            document.querySelector(`button[data-tab]="${tabId}"`).classList.add("active");
        }


}
    renderTabs();
});


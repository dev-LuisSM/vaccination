const collapsible = document.querySelectorAll(".collapsible");

collapsible.forEach(el => {
  el.addEventListener('click', () => {
    // Toggle "active" to span
    // Select "content"
    // Toggle maxHeight
    el.classList.toggle("active");
    var content = el.nextElementSibling;
    content.style.maxHeight 
        ? content.style.maxHeight = null
        : content.style.maxHeight = content.scrollHeight + "px";
    
    // Select first child and last child
    // Toggle "active-icon" to images
    var icon = el.firstElementChild;
    var arrow = el.lastElementChild;
    icon.classList.toggle("active-icon");
    arrow.classList.toggle("active-icon");

    // Toggle arrow image
    arrow.classList.contains("active-icon")
        ? arrow.src = "./images/icons/arrow-up.png"
        : arrow.src = "./images/icons/arrow-down.png";

    // Select father
    // Toggle "active-section" to section
    var father = el.parentNode;
    father.classList.toggle("active-section");
  });
});

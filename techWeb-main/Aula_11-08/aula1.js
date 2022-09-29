function mudaCor() {
    title.style.color = 'red';
    paragraph.style.color = 'red';     
}

title.addEventListener('click', mudaCor(title));
paragraph.addEventListened('click', mudaCor(paragraph));
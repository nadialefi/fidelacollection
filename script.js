document.querySelectorAll('.navbar div').forEach(item => {
    item.addEventListener('click', function () {
        const targetClass = this.getAttribute('data-target');
        const targetElement = document.querySelector(`.${targetClass}`);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Menggulung ke elemen yang dituju
        }
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


 // Function to load the document
document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');
    

    // Intersection Observer for animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('header, section, footer').forEach(section => {
        observer.observe(section);
    });
});



// Function to download my CV
document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'my_cv.pdf';
    link.download = 'MiguelAngelCabreraVictoriaCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
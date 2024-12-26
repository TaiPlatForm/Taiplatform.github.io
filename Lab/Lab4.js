document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');
    const overviewContent = document.getElementById('overview-content');
    
    tabLinks.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = tab.getAttribute('data-target');
            
            tabLinks.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            if (target === 'overview') {
                overviewContent.style.display = 'block';
            } else {
                overviewContent.style.display = 'none';
            }
        });
    });

    // Show overview content by default
    if (document.querySelector('.tab-link[data-target="overview"]').classList.contains('active')) {
        overviewContent.style.display = 'block';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.querySelector('.section-header').addEventListener('click', () => {
            section.classList.toggle('active');
        });
    });
});


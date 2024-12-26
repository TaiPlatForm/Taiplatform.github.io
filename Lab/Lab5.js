const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                menuItems.forEach(mi => mi.classList.remove('active'));
                this.classList.add('active');
                
                const sectionId = this.getAttribute('data-section');
                
                document.querySelectorAll('.content-section').forEach(section => {
                    section.style.display = 'none';
                });
                
                if (sectionId === 'certifications') {
                    document.getElementById('certifications-content').style.display = 'block';
                }

                if (sectionId === 'archived') {
                    document.getElementById('archived-content').style.display = 'block';
                }

                if (sectionId === 'learning-tools') {
                    document.getElementById('learning-tools-content').style.display = 'block';
                }
            });
        });

        // Set certifications tab as active by default
        document.querySelector('[data-section="certifications"]').click();
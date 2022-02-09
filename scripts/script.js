const fileName = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

if (fileName == '' || fileName == 'index.html') {
    import('./pages/index.js');
} else if (fileName == 'photographer.html') {
    import('./pages/photographer.js');
}

import './utils/contactForm.js';
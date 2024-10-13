window.addEventListener('DOMContentLoaded', () => {

    function onScrollSmallScreen() {
        window.addEventListener('scroll', () => {
            let formGroup = document.querySelector('.form-group');
            const advertiseLink = document.querySelector('.Advertise-link');
            if(window.scrollY >= 56){
                formGroup.classList.remove('d-none');
                advertiseLink.classList.add('d-none');
            }else{
                formGroup.classList.add('d-none');
                advertiseLink.classList.remove('d-none');
            }
        });
    }

    function onScrollLargeScreen() {
        window.addEventListener('scroll', () => {
            let middleSection = document.querySelector('.middle-section');
            const ypLogo = document.querySelector('.yp-logo-sm');
            if(window.scrollY >= 56){
                middleSection.classList.remove('d-none');
                ypLogo.classList.add('hide-yp-logo-sm');
            }else{
                middleSection.classList.add('d-none');
                ypLogo.classList.remove('hide-yp-logo-sm');
            }
        });
    }

    onScrollSmallScreen();
    onScrollLargeScreen();
});

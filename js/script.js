$(document).ready(function() {
    let overlay = $('.overlay'),
        modal = $('.modal'),
        scheduleBtn = $('nav ul li:eq(1)'),
        chooseBtn = $('.main_btna'),
        consultBtn = $('.contact'),
        close = $('.close');

    scheduleBtn.on('click', function () {
       showModal();
    });
    chooseBtn.on('click', function () {
       showModal();
    });
    consultBtn.on('click', function () {
       showModal();
    });
    close.on('click', function () {
       closeModal();
    });

    function showModal() {
        overlay.fadeIn();
        modal.slideDown();
    }

    function closeModal() {
        overlay.fadeOut();
        modal.slideUp();
    }
});
$(document).ready(function () {

    $('.btn').click(function () {
        

        let src = $(this).prev().attr('src');
        let detail = $(this).parent().next().text();
        let price = $(this).parent().parent().children('p').text();
        
        let id = $(this).parent().parent().attr('id');

        let obj = new cart(src, detail, price);

        let jsoned = JSON.stringify(obj);

        localStorage.setItem(id, jsoned);

        swal("Good Job!", $(this).parent().next().text(), "success");

    })

    function cart(src, detail, price) {
        this.src = src;
        this.detail = detail;
        this.price = price;
    }

    let btn = $('.btn');
    let parent = btn.parent();

    parent.css({
        'position': 'relative',
        'overflow': 'hidden'
    });

    btn.css({
        'position': 'absolute',
        'bottom': '-35%',
        'left': '28%'
    });


})
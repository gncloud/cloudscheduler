$(document).ready(function(){
    var submitIcon = $('.searchbox-icon, .searchbox-submit');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.searchbox-icon').css('display','block');
            submitIcon.click();
        }
    });
});
function buttonUp(){
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.searchbox-icon').css('display','none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display','block');
    }
}




/*left menu*/
$(".left-btn").click(function() {
    $("#menu,.page_cover,html").addClass("open");
    window.location.hash = "#open";
});

window.onhashchange = function() {
    if (location.hash != "#open") {
        $("#menu,.page_cover,html").removeClass("open");
    }
};



$('.gn-scheduler-header').affix({
    offset: {
        top: 100
    }
});




/* angular js tooltip */
module.exports = {
    use: [
        'postcss-import'
        , 'autoprefixer'
        , 'cssnano']
    , 'local-plugins' : true
    , 'autoprefixer' : {browsers: 'last 2 versions'}
    , input: 'docs/index.css'
    , output: 'docs/build.css'
}







"use strict"

function redirectToThePage(obj){
    var url = $(obj).attr('data-href');
    window.location.href = url;
}
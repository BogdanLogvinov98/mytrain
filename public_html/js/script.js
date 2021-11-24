var myHash = location.hash;
location.hash = ''; 
if(myHash[1] != undefined){ 
    $('html, body').animate({scrollTop: $(myHash).offset().top}, 1000); 
};
'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){
    document.body.classList.toggle('temaescuro')

    var classname = document.body.classname;
    if(classname == "temaclaro"){
        this.textcontent = "dark";
    }
    else{
        this.textcontent = "ligth";
        console.log('current class name: ' + classname);
    }
});
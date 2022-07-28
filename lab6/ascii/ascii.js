const fontSize = [
    {
        key :'tiny',
        value : '7pt'
    },
    {
        key :'small',
        value : '10pt'
    },
    {
        key :'medium',
        value : '12pt'
    },
    {
        key :'large',
        value : '16pt'
    },
    {
        key :'extra-large',
        value : '24pt'
    },
    {
        key :'xxl',
        value : '32pt'
    }
]

var defaultSpeed = 250;
var turboSpeed = 50;
var currentFrame = 0;
var animation = "";
var interval;

$(document).ready(function(){
    $('#size').change(function(){
        var font = $('#size').val();
        for (let i = 0; i < fontSize.length; i++) {
            if (font === fontSize[i].key) {
                // console.log(font)
                // console.log(fontSize[i].key)
                $('textarea').css('font-size', fontSize[i].value);
            }   
        }
    })
    });
 
$(document).ready(function(){
   
    $('#start').click(function(){
        var speed = 0;
        if ($('#speed').is(":checked")) {
            speed = turboSpeed;
        }else{
            speed = defaultSpeed;
        }
        frame = 0;
        animation = $("#animations").val();
        $("#start").prop("disabled",true);
        $("#stop").prop("disabled",false);

        interval = setInterval(animate,speed);

        $("#stop").click(function(){
            clearInterval(interval);
            $("#stop").prop("disabled",true);
            $("#start").prop("disabled",false);
        })

    })

    var animate = function animate(){
        const animationList = ANIMATIONS[animation].split("=====\n");
        if(currentFrame < animationList.length){
            $("textarea").val(animationList[currentFrame++]);
        }
        if(currentFrame === animationList.length){
            currentFrame = 0;
        }
        
    }
}); 



    

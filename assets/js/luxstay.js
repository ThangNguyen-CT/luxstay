
    function autoSlider(){
            var img1 = document.getElementById("img1");
            var img2 = document.getElementById("img2");
            var lable1 = document.querySelector(".container-section-lable label:first-child");
            var lable2 = document.querySelector(".container-section-lable label:last-child");
            document.addEventListener('keyup',function(e){
            if(e.which==37){
                img1.checked=true;
                lable2.style.background = '#cacaca';
                lable1.style.background = 'rgba(39, 37, 37, 0.8)';
            }
            if(e.which==39){
                img2.checked=true;
                lable1.style.background = '#cacaca';
                lable2.style.background = 'rgba(39, 37, 37, 0.8)';
            }
        })   
        function Interval(){
            if(img2.checked==false){
                img2.checked=true;
                lable1.style.background = '#cacaca';
                lable2.style.background = 'rgba(39, 37, 37, 0.8)';
            }
            setTimeout(()=>{
                img2.checked=false;
                lable2.style.background = '#cacaca';
                lable1.style.background = 'rgba(39, 37, 37, 0.8)';
            },4000);
        };
        const vonglap = setInterval(Interval,8000);
        document.addEventListener('click',function(e){
            var lable11 = document.querySelector("#img1");
            var lable22 = document.querySelector("#img2");
        if(e.target.value == lable11.value){
                lable11.checked=true;
                lable1.style.background = 'rgba(39, 37, 37, 0.8)';
                lable2.style.background = '#cacaca';
                clearInterval(vonglap);
        }else if(e.target.value == lable22.value){
                lable22.checked=true;
                lable2.style.background = 'rgba(39, 37, 37, 0.8)';
                lable1.style.background = '#cacaca';
                clearInterval(vonglap);
        }
        })  
    }
    autoSlider();
    function sliderfame(){
        var btn_left=document.querySelector(".container-famelocal--btn-left");
        var btn_right=document.querySelector(".container-famelocal--btn-right");
        var famelocal = document.querySelector(".container-famelocal__imgs-list");
        var items= document.querySelectorAll(".container-famelocal__imgs-item");
        var width_item = items[0].offsetWidth;
        var length_item = items.length;
        var index =0;
        var positionX = 0;
        var legth_item = screen.width;
        var temp=0;
        if(legth_item<740){
            temp=1;
        }else if(legth_item>730 && legth_item < 1024){
            temp=2;
        }else{
            temp=4;
        }
        btn_right.addEventListener('click',function(){
                index++;    
                if(index>length_item-temp){
                    index = length_item-temp;
                    return;
                }
                positionX = positionX - width_item;
                famelocal.style= `transform: translateX(${positionX}px);`;    
                
        })
        btn_left.addEventListener('click',function(){
            index--;
            if(index<0){
                index=0;
                return;
            }       
            positionX = positionX + width_item;
            famelocal.style= `transform: translateX(${positionX}px);`;
        })
    }
    sliderfame();

    function sliderSuggest(){
        var items = document.querySelectorAll(".container-suggest-item");
        var width_item = items[0].offsetWidth;
        var length_item = items.length;
        var index =0;
        var positionX = 0;
        var btn_left=document.querySelector(".container-suggest--btn-left");
        var btn_right=document.querySelector(".container-suggest--btn-right");
        var list_suggest = document.querySelector(".container-suggest-list");
        var legth_item = screen.width;
        var temp=0;
        if(legth_item<740){
            temp=1;
        }else if(legth_item>730 && legth_item < 1024){
            temp=2;
        }else{
            temp=4;
        }
        btn_right.addEventListener('click',function(){
            index++;    
            if(index>length_item-temp){
                index = length_item-temp;
                return;
            }
            positionX = positionX - width_item;
            console.log(positionX)
            list_suggest.style= `transform: translateX(${positionX}px);`;    
            
    })
    btn_left.addEventListener('click',function(){
        index--;
        if(index<0){
            index=0;
            return;
        }       
        positionX = positionX + width_item;
        console.log(positionX)
        list_suggest.style= `transform: translateX(${positionX}px);`;
    })
    }
    sliderSuggest();

    function sliderDiscover(){
        var items = document.querySelectorAll(".container-discover-item");
        var width_item = items[0].offsetWidth;
        var length_item = items.length;
        var index =0;
        var positionX = 0;
        var btn_left=document.querySelector(".container-discover--btn-left");
        var btn_right=document.querySelector(".container-discover--btn-right");
        var list_discover = document.querySelector(".container-discover-list");
        var legth_item = screen.width;
        var temp=0;
        if(legth_item<740){
            temp=1;
        }else if(legth_item>730 && legth_item < 1024){
            temp=1;
        }else{
            temp=3;
        }
        btn_right.addEventListener('click',function(){
            index++;    
            if(index>length_item-temp){
                index = length_item-temp;
                return;
            }
            positionX = positionX - width_item;
            list_discover.style= `transform: translateX(${positionX}px);`;    
            console.log(positionX)
    })
    btn_left.addEventListener('click',function(){
        index--;
        if(index<0){
            index=0;
            return;
        }      
        positionX = positionX + width_item;
        list_discover.style= `transform: translateX(${positionX}px);`;
        console.log(positionX)
    })
    }
    sliderDiscover();

    // modal msg
    function BlockModalMsg(){
        var msg = document.querySelector('.msg');
        var modal_msg = document.querySelector('.modal-msg');
        msg.addEventListener('click',function(){
            modal_msg.style.display = 'block';
        })
        var NoneModalMsg = document.querySelector(".modal-msg-icon");
        NoneModalMsg.addEventListener("click",function(){
            modal_msg.style.display = 'none';
        })
    }
    BlockModalMsg();
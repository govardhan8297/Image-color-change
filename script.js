 function changeColor(event){
            document.querySelectorAll('span.active').forEach(function(item){
                item.classList.remove('active')
            });

            event.target.classList.add('active')
        }

        $(document).ready(function(){
            $('span').click(function(){
                $('img').fadeTo("slow",0);
                $('img').fadeTo("slow",1);
                $('img').fadeTo("slow",2);


            });
        });

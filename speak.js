   <!--webspeak -->
        <!-- speak_on_mousehover-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script>
        
        content = document.querySelector('.speak_on_mousehover')
        content.addEventListener('mouseenter',()=>{
            speak('read',content.innerText);
        });        
        content.addEventListener('mouseleave',()=>{
            dont_speak();
        });
  
            function playAudio(text){
                let utternance = new SpeechSynthesisUtterance(text)
                console.log('speaking',text)
                speechSynthesis.speak(utternance)
                console.log('done');
                
             }
            function dont_speak(){
                speechSynthesis.cancel();
            };
            function speak(key,text) {  
                <!--console.log(text)-->
            speechSynthesis.cancel()
            var jsondata = JSON.stringify({
                key:key,
                value:text
            });  
            $.ajax({
                url: "https://widecityshopping.tk/mybot/webbot",
                method: "POST",        
                data: jsondata,
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                },
                contentType: "application/json",
                success: function(data){
                playAudio(data['voice'])
                },
                error: function(errMsg) {
                    alert(JSON.stringify(errMsg));
                }
            });
        };

        </script>
        <!--  end  -->

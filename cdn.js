 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

        <script>
            speak = document.querySelector('.speak')
            speak.addEventListener('mouseenter',()=> {send()})
            function send(text) {  
            var jsondata = JSON.stringify({
                key:'div',
                value:text
            });  
    
            $.ajax({
                url: "http://127.0.0.1:8000/mybot/webbot",
                method: "POST",        
                data: jsondata,
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    // "X-CSRFToken": getCookie("csrftoken"),  // don't forget to include the 'getCookie' function
                },
                contentType: "application/json",
                success: function(data){;
                playAudio(data['voice'])
                },
                error: function(errMsg) {
                    alert(JSON.stringify(errMsg));
                }
            });
        };
  
            function playAudio(text){
                let utternance = new SpeechSynthesisUtterance(text)
                // utternance.voice = "Microsoft Mark - English (United States)"
                speechSynthesis.speak(utternance)
                
             }
        </script>

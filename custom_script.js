(function () {
  console.log("inside custom script");
  window.addEventListener(
    "message",
    function (event1) {
      try {
        let event = JSON.parse(event1.data);

        if (event1.origin === window.location.origin) {
          try {
            const frameDocument =
              window.frames &&
              window.frames.ymIframe &&
              window.frames.ymIframe.document;

            const widgetIcon = frameDocument.querySelector(".icon");
            widgetIcon.src =
              "https://cdn.yellowmessenger.com/HtHiDj1mBqsO1653298717353.png";

            let myiFrame = document.getElementById("ymIframe");
            let doc = myiFrame.contentDocument;
            const styles = `
              #chatDetails img.icon {
               border-radius: 0;
           }
           .from-me div{
               box-shadow: rgb(0 0 0 / 9%) 0px 6px 10px 0px;
               border-radius: 14px;
           }
           
           .from-them div{
               background-color:#fff;
               box-shadow:rgb(0 0 0 / 9%) 0px 6px 10px 0px;
               border-radius: 2px 14px 14px;
           }
           
           .card button:hover {
                  background-color: #FF0082;
               color: white;
           }
   
           .card .card_buttons {
               padding: 0 10px 5px;
           }
   
   
           .card button{
               background: #ffffff;
               border: 1px solid #FF0082;
               border-radius: 5px;
               margin-top: 3px;
           }
   
           .card{
               background: #ffffff;
           }
   
    }    
`;
            var styleSheet = document.createElement("style");
            styleSheet.innerText = styles;
            myiFrame.contentDocument.head.appendChild(styleSheet);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error, "Error occured");
      }
    },
    false
  );
})();

(function () {
  console.log("inside custom script");
  window.addEventListener(
    "message",
    function (event1) {
      try {
        let event = JSON.parse(event1.data);
        console.log(event, "EVENT DETAILS");
        //face --- https://cdn.yellowmessenger.com/kHnrZapBk77O1653298392945.png
        //bot ---https://cdn.yellowmessenger.com/HtHiDj1mBqsO1653298717353.png

        if ("create-ui" == event.event_code) {
          window.ymInterval = setInterval(() => {
            try {
              console.log("value triggered for event", event.event_code);

              const frameDocument =
                window.frames &&
                window.frames.ymIframe &&
                window.frames.ymIframe.document;

              const widgetIcon = frameDocument.querySelector(".icon");
              widgetIcon.src =
                "https://cdn.yellowmessenger.com/HtHiDj1mBqsO1653298717353.png";
              widgetIcon.style.height = "50";
              widgetIcon.style.width = "50";
              widgetIcon.style.margin = "auto 13px auto 0px";
              widgetIcon.style.objectFit = "cover";
              widgetIcon.style.float = "left";
              console.log(widgetIcon, "TOP BAR");

              let widgetButton = document
                .getElementById("ymDivBar")
                .getElementsByTagName("img")
                .item(0);
              widgetButton.style.height = "155px";
              // widgetButton.height()
              console.log(widgetButton, "WIDGET BUTTON");

              let myiFrame = document.getElementById("ymIframe");
              console.log(myiFrame, "IFRAME");
              let doc = myiFrame.contentDocument;
              doc.head.innerHTML =
                doc.head.innerHTML +
                `
     <style>

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


        </style>
     `;

              clearInterval(window.ymInterval);
            } catch (error) {
              clearInterval(window.ymInterval);
            }
          }, 100);
        }
      } catch (error) {
        console.log(error, "Error occured");
      }
    },
    false
  );
})();

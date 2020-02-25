function App() {

}

App.prototype.onReady = function () {
    Logger.trace(Logger.STATUS.OK, "App", "onReady");
    window.Navigation = new Navigation(document.getElementById("widget_view"));

    Navigation.route({
        "/": new InkWell({
            child: new Center({
                child: new FlatButton({
                    onClick: function () {
                        alert("wow!");
                    },
                    text: "hello world!!!",
                    style: {
                        width: "100px",
                        height: "100px",
                        fontSize: "20px",
                        backgroundColor : "blue"
                    }
                }), // flat button
                style : {
                    backgroundColor : "transparent"
                }
            }), // center
        }), // inkwell
        
        "/test" : new Scaffold({
            appBar : new InkWell(),
            child : new Center({
                child : new FlatButton({
                    text : "hello world"
                }),
            }),
        })
    });

    Navigation.push("/test");
}

App.prototype.onBackButton = function () {

}

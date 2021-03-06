function TestPage(context) {
    
    Page.call(this,context);
}
TestPage.prototype = Object.create(Page.prototype);


TestPage.prototype.build = function() {
    return new Scaffold({
        appBar : new InkWell({
            child :  new FlatButton({
                key : "backButton",
                text : "back",
                style : {
                    width : "100%",
                    height : "100%",
                    backgroundColor : "transparent"
                },
                onClick : function() {
                    Navigation.pop();
                }
            })
        }),
        child : new Column({
            justifyContent : "space-between",
            alignItems : "stretch",
            style : {
                width : "100%"
            },
            children : [
                new Container({
                    height : "50%",
                    child : new InkWell()
                }),
                new Container({
                    height : "50%",
                    child : new FlatButton({
                        key : "myButton",
                        text : "wow!"
                    })
                })
            ]
        })
    });
}



TestPage.prototype.onCreate = function() {
    console.log("onCreate");
}



TestPage.prototype.onStart = function() {
    console.log("onStart");
    this.button = this.getWidgetByKey("myButton");
    this.button.onClick = function(e) {
        Navigation.push("/test1");
    }
}



TestPage.prototype.onResume = function() {
    
}



TestPage.prototype.onPause = function() {
    
}



TestPage.prototype.onDestroy = function() {
    
}



function TestPage2(context) {
    
    Page.call(this,context);
}
TestPage2.prototype = Object.create(Page.prototype);


TestPage2.prototype.build = function() {
    return new Scaffold({
        appBar : new InkWell({
            child :  new FlatButton({
                key : "backButton",
                text : "back",
                style : {
                    width : "100%",
                    height : "100%"
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



TestPage2.prototype.onCreate = function() {
    console.log("onCreate");
}



TestPage2.prototype.onStart = function() {
    console.log("onStart");
    this.button = this.getWidgetByKey("myButton");
    this.button.onClick = function(e) {
        Navigation.push("/");
    }
}



TestPage2.prototype.onResume = function() {
    
}



TestPage2.prototype.onPause = function() {
    
}



TestPage2.prototype.onDestroy = function() {
    
}



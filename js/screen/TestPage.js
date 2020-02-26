function TestPage(context) {
    
    Page.call(this,context);
}
TestPage.prototype = Object.create(Page.prototype);


TestPage.prototype.build = function() {
    return new Scaffold({
        appBar : new InkWell(),
        child : new Center({
            child : new FlatButton({
                key : "myButton",
                text : 12312312312312312313123123123
            })
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
        console.log(e);
    }
}




function FlatButton(buildContext) {
    
    buildContext = (buildContext != null) ? buildContext : {};
    buildContext.style = (buildContext.style == null) ? "width:100%; height:100%; background-color:transparent; border:none;" : buildContext.style;
    
    this.text = (buildContext.text != null) ? buildContext.text : "";
    this.onClick = buildContext.onClick;
    
    
    Widget.call(this, buildContext);
}
FlatButton.prototype = Object.create(Widget.prototype);



/* @override */
FlatButton.prototype.initWidget = function() {}

/* @override */
FlatButton.prototype.build = function() {
    return  "<button data-widget-name='FlatButton' data-key='" + this.key + "' style='" + this.style + "' class='" + this.class + "'>" +
                this.text + 
            "</button>";
}

/* @override */
FlatButton.prototype.initState = function() {
    var _this = this;
    this.html.addEventListener("click", function(e) {
        if(typeof _this.onClick == "function") {
            _this.onClick(e);
        }
    });
}

/* @override */
FlatButton.prototype.destroy = function() {}

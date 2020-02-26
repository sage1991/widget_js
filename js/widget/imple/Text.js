function Text(context) {
    context = (context != null) ? context : {text:""};
    this.text = context.text;
    ChildWidget.call(this, context);
}
Text.prototype = Object.create(ChildWidget.prototype);



/* @override */
Text.prototype.initWidget = function() {
    this.frame = this.html;
}



/* @override */
Text.prototype.build = function() {
    return  "<p data-widget-name='Text' data-key='" + this.key + "' data-group='" + this.group + "'>" + this.text + "</p>";
}



Text.prototype.setText = function(text) {
    this.frame.innerText = text;
    this.text = text;
}


Text.prototype.getText = function() {
    return this.text;
}



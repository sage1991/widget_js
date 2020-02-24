function ChildWidget(context) {
    
    context = (context != null) ? context : {};
    this.child = context.child;
    Widget.call(this, context);
}
ChildWidget.prototype = Object.create(Widget.prototype);






/*
    [ initWidgetTree() ]
    - child widget 초기화
*/
ChildWidget.prototype.initWidgetTree = function() {
    if(this.frame != null && this.child != null) {
        this.child.parent = this;
        this.child.appendTo(this.frame);
    }
}


ChildWidget.prototype.getWidgetByKey = function(key) {
    var result = null;
    if(this.html.dataset.key == key) {
        result = this;
    } else {
        result = this.child.getWidgetByKey(key);
    }
    return result;
}




ChildWidget.prototype.getWidgetsByGroup = function(group) {
    var widgetGroup = [];
    if(this.html.dataset.group == group) {
        widgetGroup.push(this);
    }
    widgetGroup.concat(this.child.getWidgetsByGroup(group));
    return widgetGroup;
}


ChildWidget.prototype.destroy = function() {
    if(this.child) {
        this.child.destroy();
    }
    this.onDestroy();
}





function ChildrenWidget(context) {
    
    context = (context != null) ? context : {};
    this.children = (context.children) ? context.children : [];
    Widget.call(this, context);
}
ChildrenWidget.prototype = Object.create(Widget.prototype);



/*
    [ initWidgetTree() ]
    - child widget 초기화
*/
ChildrenWidget.prototype.initWidgetTree = function() {
    if(this.frame != null && this.children.length > 0) {
        for(var index in this.children) {
            this.children[index].parent = this;
            this.children[index].appendTo(this.frame);
        }
    }
}


ChildrenWidget.prototype.getWidgetByKey = function(key) {
    var result = null;
    if(this.html.dataset.key == key) {
        result = this;
    } else {
        for(var index in this.children) {
            if(this.children[index].html.dataset.key == key) {
                result = this.children[index];
                break;
            } else {
                result = this.children[index].getWidgetByKey(key);
                if(result != null) break;
            }
        }
    }
    return result;
}


ChildrenWidget.prototype.getWidgetsByGroup = function(group) {
    var widgetGroup = [];
    if(this.html.dataset.group == group) {
        widgetGroup.push(this);
    }
    for(var index in this.children) {
        widgetGroup.concat(this.children[index].getWidgetsByGroup(group));
    }
    return widgetGroup;
}


ChildrenWidget.prototype.destroy = function() {
    for(var index in this.children) {
        this.children[index].destroy();
    }
    this.onDestroy();
}

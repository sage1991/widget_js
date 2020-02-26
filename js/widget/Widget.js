function Widget(context) {
    
    context = (context != null) ? context : {};
    
    this.parent = null;  // 부모 객체에서 참조 주입
    
    // 쿼리용 key, group
    this.key = (context.key != null) ? context.key : "";
    this.group = (context.group != null) ? context.group : "";
    
    
    // html node
    var structure = this.build();
    if(typeof structure == "string") {
        this.html = WidgetParser.parseFromString(structure);
    } else {
        this.html = structure.html;
    }
    
    // 스타일 설정
    this.style = (context.style != null) ? context.style : {};
    for(var key in this.style) {
        this.html.style[key] = this.style[key];
    }
    
    
    this.initWidget(context);
    this.initWidgetTree();
}



/*
    [ initWidget() ]
    - DOM에 대한 참조를 얻는곳
*/
Widget.prototype.initWidget = /* abstract */ function(context) {}


/*
    [ build() ]
    - widget이 표현 할 html 혹은 widget을 리턴
*/
Widget.prototype.build = /* abstract */ function() {
    return  "<div data-widget-name='Widget' data-key=''></div>";  // return new Widget();
}


/*
    [ destroy() ]
    - 리소스 정리
*/
Widget.prototype.destroy = /* abstract */ function() {}


Widget.prototype.onDestroy = /* abstract */ function() {}



/*
    [ appendTo() ]
    - dom에 append
*/
Widget.prototype.appendTo = function(target) {
    this.view = target;
    target.appendChild(this.html);
}


/*
    [ removeFrom() ]
*/
Widget.prototype.removeFrom = function(target) {
    target.removeChild(this.html);
}


/*
    [ initChildWidget() ]
    - child widget 초기화
*/
Widget.prototype.initWidgetTree = function() {}


Widget.prototype.getWidgetByKey = function(key) {}


Widget.prototype.getWidgetsByGroup = function(group) {}


Widget.prototype.addClass = function(clazz) {
    this.html.className += " " + clazz;
}

Widget.prototype.removeClass = function(clazz) {
    var classToken = this.html.className;
    this.html.className = classToken.replace(clazz, "").replace(/\s{2,}/g, " ");
}


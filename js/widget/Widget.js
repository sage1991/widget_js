var domParser = new DOMParser();

function Widget(context) {
    
    context = (context != null) ? context : {};
    
    // 쿼리용 key
    this.key = (context.key != null) ? context.key : "";
    
    this.initWidget(context);
    this.initEvent();
    
    // 가상 DOM 구조
    this.parent = null;  // 부모 객체에서 참조 주입
    this.html = this.parseDOMFromString(this.build());  // html element 수정 필요.
    
    // 스타일 설정
    this.style = (context.style != null) ? context.style : kDefaultStyle;
    for(var key in this.style) {
        this.html.style[key] = this.style[key];
    }
    
    this.ready();
    
    
    this.initChildWidget();
    this.initState();
}









/*
    [ initWidget() ]
    - DOM에 대한 참조를 얻는곳
*/
Widget.prototype.initWidget = /* abstract */ function(context) {}


/*
    [ build() ]
    - widget이 표현 할 html을 리턴
*/
Widget.prototype.build = /* abstract */ function() {
    return  "<div data-widget-name='Widget' data-key=''></div>";  // return html string
}


/*
    [ initState() ]
    - 변수 및 이벤트 초기화
*/
Widget.prototype.initState = /* abstract */ function() {}



/*
    [ onRender() ]
    - 화면에 랜더링 된 직후
*/
Widget.prototype.onRender = /* abstract */ function() {}



/*
    [ destroy() ]
    - 리소스 정리
*/
Widget.prototype.destroy = /* abstract */ function() {}





Widget.prototype.triggerDestroyChain = /* abstract */ function() {
    if(this.child != null) {
        this.child.triggerDestroyChain();
    } else if(this.children != null) {
        for(var i = 0; i < this.children.length; i++) {
            this.children[i].triggerDestroyChain();
        }
    }
    this.destroy();
}


Widget.prototype.triggerRenderChain = /* abstract */ function() {
    if(this.child != null) {
        this.child.triggerRenderChain();
    } else if(this.children != null) {
        for(var i = 0; i < this.children.length; i++) {
            this.children[i].triggerRenderChain();
        }
    }
    this.onRender();
}




/*
    [ initChildWidget() ]
    - child widget 초기화
*/
Widget.prototype.initChildWidget = function() {
    if(this.container != null) {
        if(this.children != null) {
            for(var i = 0; i < this.children.length; i++) {
                this.children[i].parent = this;
                this.container.appendChild(this.children[i].html);
            }
        } else if(this.child != null) {
            this.child.parent = this;
            this.container.appendChild(this.child.html);
        }
    }
}




/*
    [ appendTo ]
*/
Widget.prototype.appendToDOM = function(htmlElement) {
    htmlElement.appendChild(this.html);
    
    this.onRender();
}

/*
    [ appendTo ]
*/
Widget.prototype.removeFromDOM = function(htmlElement) {
    this.triggerDestroyChain();
    htmlElement.removeChild(this.html);
}


Widget.prototype.appendChildWidget = function(Widget) {
    if(this.container != null) {
        this.child = Widget;
        Widget.parent = this;
        this.container.appendChild(Widget.html);
    }
    
}



Widget.prototype.pushChildWidget = function(Widget) {
    if(this.container != null) {
        this.children.push(Widget);
        Widget.parent = this;
        this.container.appendChild(Widget.html);
    }
}




Widget.prototype.getElementsByKey = function(key) {
    if(this.html.dataset.key == key) {
        return this.html;
    } else {
        
        if(this.child != null) {
            return this.child.getElementsByKey(key);
        } 
        
        else if(this.children != null) {
            
            var result = [];
            for(var i = 0; i < this.children.length; i++) {
                var element = this.children[i].getElementsByKey(key);
                if(element != null) {
                    result.push(element);
                }
            }
            
            if(result.length > 0) {
                return result;
            } else {
                return null;
            }
            
        } 
        
        // 모든 노드를 탐색 했지만 
        else {
            return null;
        }
    }
}


Widget.prototype.reomveChildWidget = function() {
    if(this.child != null) {
        this.child.destroy();
        this.container.removeChild(this.child);
        this.child.parent = null;
        this.child = null;
    }
}


Widget.prototype.reomveNthChildWidget = function(index) {
    if(this.children != null && this.children.length - 1 >= index && index >= 0) {
        this.children[index].destroy();
        this.container.removeChild(this.children[index]);
        this.children.splice(index, 1);
        if(this.children.length == 0) {
            this.children = [];
        }
    }
}





Widget.prototype.parseDOMFromString = function(htmlString) {
    return domParser.parseFromString(htmlString, "text/html").body.firstChild;
}

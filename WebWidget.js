var domParser = new DOMParser();

function WebWidget(buildContext) {
    
    buildContext = (buildContext != null) ? buildContext : {};
    
    this.key = (buildContext.key != null) ? buildContext.key : "";
    this.parent = null;
    this.child = (buildContext.child != null) ? buildContext.child : null;
    this.children = (this.child == null && buildContext.children != null) ? buildContext.children : null;
    this.style = (buildContext.style != null) ? buildContext.style : "";
    this.class = (buildContext.class != null) ? buildContext.class : "";
    
    this.html = this.parseDOMFromString(this.build());
    this.initWidget();
    this.initState();
    this.initChildWidget();
    this.initState();
    
}









/*
    [ initWidget() ]
    - DOM에 대한 참조를 얻는곳
*/
WebWidget.prototype.initWidget = /* abstract */ function() {}


/*
    [ build() ]
    - widget이 표현 할 html을 리턴
*/
WebWidget.prototype.build = /* abstract */ function() {
    return  "<div data-widget-name='WebWidget' data-key=''></div>";  // return html string
}


/*
    [ initState() ]
    - 변수 및 이벤트 초기화
*/
WebWidget.prototype.initState = /* abstract */ function() {}


/*
    [ destroy() ]
    - 리소스 정리
*/
WebWidget.prototype.destroy = /* abstract */ function() {}



/*
    [ initChildWidget() ]
    - child widget 초기화
*/
WebWidget.prototype.initChildWidget = function() {
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
WebWidget.prototype.appendToDOM = function(htmlElement) {
    htmlElement.appendChild(this.html);
}

/*
    [ appendTo ]
*/
WebWidget.prototype.removeFromDOM = function(htmlElement) {
    this.destroy();
    htmlElement.removeChild(this.html);
}


WebWidget.prototype.appendChildWidget = function(webWidget) {
    if(this.container != null) {
        this.child = webWidget;
        webWidget.parent = this;
        this.container.appendChild(webWidget.html);
    }
    
}



WebWidget.prototype.pushChildWidget = function(webWidget) {
    if(this.container != null) {
        this.children.push(webWidget);
        webWidget.parent = this;
        this.container.appendChild(webWidget.html);
    }
}




WebWidget.prototype.getElementsByKey = function(key) {
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


WebWidget.prototype.reomveChildWidget = function() {
    if(this.child != null) {
        this.child.destroy();
        this.container.removeChild(this.child);
        this.child.parent = null;
        this.child = null;
    }
}


WebWidget.prototype.reomveNthChildWidget = function(index) {
    if(this.children != null && this.children.length - 1 >= index && index >= 0) {
        this.children[index].destroy();
        this.container.removeChild(this.children[index]);
        this.children.splice(index, 1);
        if(this.children.length == 0) {
            this.children = [];
        }
    }
}





WebWidget.prototype.parseDOMFromString = function(htmlString) {
    return domParser.parseFromString(htmlString, "text/html").body.firstChild;
}

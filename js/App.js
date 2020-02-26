function App() {

}

App.prototype.onReady = function () {
    Logger.trace(Logger.STATUS.OK, "App", "onReady");
    window.Navigation = new Navigation(document.getElementById("widget_view"));

    Navigation.route({
        "/": new InkWell({
            child: new Center({
                child: new FlatButton({
                    onClick: function () {
                        alert("wow!");
                    },
                    text: "hello world!!!",
                    style: {
                        width: "100px",
                        height: "100px",
                        fontSize: "20px",
                        backgroundColor : "blue"
                    }
                }), // flat button
                style : {
                    backgroundColor : "transparent"
                }
            }), // center
        }), // inkwell
        
        "/test" : new Scaffold({
            
            // app bar
            appBar : new InkWell({
                child : new Center({
                    child : new Text({
                        text : "hello",
                        style : {
                            color : "white"
                        }
                    })  // Text
                })  // Center
            }),  // InkWell
            
            // body
            child : new Center({
                child : new Column({
                    reverse : true,
                    alignItems : "stretch",
                    justifyContent : "space-between",
                    style : {
                        width : "100%"
                    },
                    children : [
                        new Row({
                            justifyContent : "space-between",
                            children : [
                                new FlatButton({
                                    text : "1"
                                }),
                                new FlatButton({
                                    text : "2"
                                }),
                                new FlatButton({
                                    text : "3"
                                }),
                                new FlatButton({
                                    text : "4"
                                })
                            ]
                        }),  // Row
                        new FlatButton({
                            text : "1"
                        }),  // FlatButton
                        new Row({
                            justifyContent : "space-between",
                            children : [
                                new FlatButton({
                                    text : "1"
                                }),
                                new FlatButton({
                                    text : "2"
                                }),
                                new FlatButton({
                                    text : "3"
                                }),
                                new FlatButton({
                                    text : "4"
                                })
                            ]
                        }),  // Row
                        new FlatButton({
                            text : "2"
                        }),  // FlatButton
                        new Row({
                            justifyContent : "space-between",
                            children : [
                                new FlatButton({
                                    text : "1"
                                }),
                                new FlatButton({
                                    text : "2"
                                }),
                                new FlatButton({
                                    text : "3"
                                }),
                                new FlatButton({
                                    text : "4"
                                })
                            ]
                        }),  // Row
                        new FlatButton({
                            text : "3"
                        }),  // FlatButton
                        new Row({
                            justifyContent : "space-between",
                            children : [
                                new FlatButton({
                                    text : "1"
                                }),
                                new FlatButton({
                                    text : "2"
                                }),
                                new FlatButton({
                                    text : "3"
                                }),
                                new FlatButton({
                                    text : "4"
                                })
                            ]
                        }),  // Row
                        new FlatButton({
                            text : "4"
                        }),  // FlatButton
                        new Row({
                            justifyContent : "space-between",
                            children : [
                                new FlatButton({
                                    text : "1"
                                }),
                                new FlatButton({
                                    text : "2"
                                }),
                                new FlatButton({
                                    text : "3"
                                }),
                                new FlatButton({
                                    text : "4"
                                })
                            ]
                        }),  // Row
                        new FlatButton({
                            text : "5"
                        }),  // FlatButton
                        new Row({
                            justifyContent : "space-between",
                            children : [
                                new FlatButton({
                                    text : "1"
                                }),
                                new FlatButton({
                                    text : "2"
                                }),
                                new FlatButton({
                                    text : "3"
                                }),
                                new FlatButton({
                                    text : "4"
                                })
                            ]
                        }),  // Row
                        new FlatButton({
                            text : "6"
                        })  // FlatButton
                    ]
                })  // Column
            }),  // Center
        })  // scaffold
    });

    Navigation.push("/test");
}

App.prototype.onBackButton = function () {

}

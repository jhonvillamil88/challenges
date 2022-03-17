const extract = require('./extract');


test('one', ()=>{
    const example = extract({
        uui:"1",
        jhon:{
            uui:"2"
        },
        mary:{
            mama:{
                papa:{
                    uui:"5"
                }
            },
            tio:{
                uui:"10"
            }
        }
    },"uui");
    const expected = new Map([
        ['', "1"],
        ['jhon', "2"],
        ['mary/mama/papa', "5"],
        ['mary/tio', "10"]
    ]);
    expect(example).toEqual(expected);
});

test('two', ()=>{
    const example = extract({
        uui:"1",
        jhon:{
            uui:"2"
        },
        mary:{
            mama:{
                papa:{
                    uui:"5"
                }
            },
            tio:{
                uui:"10"
            }
        },
        perro:{
            dato:{
                mary:{
                    mama:{
                        papa:{
                            uui:"5"
                        }
                    },
                    tio:{
                        uui:"10"
                    }
                }
            }
        }
    },"uui");
    const expected = new Map([
        ["" , "1"],
        ["jhon" , "2"],
        ["mary/mama/papa" , "5"],
        ["mary/tio" , "10"],
        ["perro/dato/mary/mama/papa" , "5"],
        ["perro/dato/mary/tio" , "10"]
    ]);
    expect(example).toEqual(expected);
});


test('three', ()=>{
    const example = extract({
        uui:"1",
        jhon:{
            uui:"2"
        },
        mary:{
            mama:{
                papa:{
                    uui:"5"
                }
            },
            tio:{
                uui:"10"
            }
        },
        perro:{
            dato:{
                mary:{
                    mama:{
                        papa:{
                            uui:"5"
                        }
                    },
                    tio:{
                        uui:"10"
                    }
                }
            }
        },
        animales:{
            perro:{
                dato:{
                    mary:{
                        mama:{
                            papa:{
                                uui:"5"
                            }
                        },
                        tio:{
                            uui:"10"
                        }
                    }
                }
            }
        }
    },"uui");
    const expected = new Map([
        ["" , "1"],
        ["animales/perro/dato/mary/mama/papa" , "5"],
        ["animales/perro/dato/mary/tio" , "10"],
        ["jhon" , "2"],
        ["mary/mama/papa" , "5"],
        ["mary/tio" , "10"],
        ["perro/dato/mary/mama/papa" , "5"],
        ["perro/dato/mary/tio" , "10"]
    ]);
    expect(example).toEqual(expected);
});

test('four', ()=>{
    const example = extract({
        uui:"1",
        jhon:{
            uui:"2"
        },
        mary:{
            mama:{
                papa:{
                    uui:"5"
                }
            },
            tio:{
                uui:"10",
                cali:{
                    uui:"1",
                    jhon:{
                        uui:"2"
                    },
                    mary:{
                        mama:{
                            papa:{
                                uui:"5"
                            }
                        },
                        tio:{
                            uui:"10"
                        }
                    }
                }
            }
        }
    },"uui");
    const expected = new Map([
        ["" , "1"],
        ["jhon" , "2"],
        ["mary/mama/papa" , "5"],
        ["mary/tio" , "10"],
        ["mary/tio/cali" , "1"],
        ["mary/tio/cali/jhon" , "2"],
        ["mary/tio/cali/mary/mama/papa" , "5"],
        ["mary/tio/cali/mary/tio" , "10"]
    ]);
    expect(example).toEqual(expected);
});


test('five', ()=>{
    const example = extract({
        someObject:{
            uuid:1,
            innerOne:{
                someKey:"some text"
            },
            innerTwo:{
                uuid:2,
                innerThree:{
                    someOtherKey:"some other text",
                    innerFour:{
                        uuid:3
                    }
                }
            }
        }
    },"uuid");
    const expected = new Map([
        ["someObject" , 1],
        ["someObject/innerTwo" , 2],
        ["someObject/innerTwo/innerThree/innerFour" , 3]
    ]);
    expect(example).toEqual(expected);
});




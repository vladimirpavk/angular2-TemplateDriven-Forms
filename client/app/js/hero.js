System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hero;
    return {
        setters:[],
        execute: function() {
            class Hero {
                constructor(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
            }
            exports_1("Hero", Hero);
        }
    }
});

//# sourceMappingURL=hero.js.map

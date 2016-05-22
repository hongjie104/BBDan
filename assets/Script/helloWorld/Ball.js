cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        // 跳跃上升
        var jumpUp = cc.moveBy(0.3, cc.p(0, 150)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(0.3, cc.p(0, -150)).easing(cc.easeCubicActionIn());
        // 不断重复
        this.node.runAction(cc.repeatForever(cc.sequence(jumpUp, jumpDown)));
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

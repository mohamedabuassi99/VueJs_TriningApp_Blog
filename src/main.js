import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./scss/main.scss";
import "normalize.css";
Vue.config.productionTip = false;

//make UppderCase
Vue.filter("uppercase", function(v) {
    return v.toUpperCase();
});

//make reverse
Vue.filter("reverse", function(v) {
    return v
        .split("")
        .reverse()
        .join("");
});

Vue.filter("shorten", function(value, lengthText, icon) {
    return value.substring(0, lengthText) + icon;
});

//make font bold with custom directive
Vue.directive("bold", {
    bind: function(el,binding) {
        el.style.fontSize = "60px";
        if(binding.modifiers.bold){
            el.style.fontSize = "60px";

        }

        if(binding.modifiers.red){
            el.style.color = "red";
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

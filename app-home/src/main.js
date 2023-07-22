import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecyle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
  handleInstance: (app) => {
    app.use(ElementPlus);
  }
});


const { bootstrap : _bootstrap, mount: _mount, unmount: _unmount } = vueLifecycles;

export function bootstrap(props){
  return Promise.resolve().then(()=>{
    console.log(props.name,"bootstrap");
    _bootstrap(props);
  });
}
export function mount(props){
  return Promise.resolve().then(()=>{
    console.log(props.name,"mount");
    _mount(props);
  });
}
export function unmount(props){
  return Promise.resolve().then(()=>{
    console.log(props.name,"unmount");
    _unmount(props);
  });
}

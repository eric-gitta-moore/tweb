//import {stackBlurImage} from '../lib/StackBlur';
import Page from "./page";
import { DEBUG } from "../lib/mtproto/mtproto_config";

let onFirstMount = () => {
  //return;

  const promise = import('../lib/appManagers/appDialogsManager');
  promise.finally(async() => {
    //alert('pageIm!');

    //AudioContext && global.navigator && global.navigator.mediaDevices && global.navigator.mediaDevices.getUserMedia && global.WebAssembly;

    /* // @ts-ignore
    var AudioContext = globalThis.AudioContext || globalThis.webkitAudioContext;
    alert('AudioContext:' + typeof(AudioContext));
    // @ts-ignore
    alert('global.navigator:' + typeof(navigator));
    alert('navigator.mediaDevices:' + typeof(navigator.mediaDevices));
    alert('navigator.mediaDevices.getUserMedia:' + typeof(navigator.mediaDevices?.getUserMedia));
    alert('global.WebAssembly:' + typeof(WebAssembly)); */
  
    if(DEBUG) {
      import('../lib/services');
    }
  
    //(Array.from(document.getElementsByClassName('rp')) as HTMLElement[]).forEach(el => ripple(el));

    const misc = await import("../components/misc");
    Array.from(document.getElementsByClassName('btn-menu-toggle')).forEach((el) => {
      (el as HTMLElement).addEventListener('click', (e) => {
        //console.log('click pageIm');
        if(!el.classList.contains('btn-menu-toggle')) return false;
  
        //window.removeEventListener('mousemove', onMouseMove);
        let openedMenu = el.querySelector('.btn-menu') as HTMLDivElement;
        e.cancelBubble = true;
        //cancelEvent(e);
  
        if(el.classList.contains('menu-open')) {
          el.classList.remove('menu-open');
          openedMenu.classList.remove('active');
        } else {
          misc.openBtnMenu(openedMenu);
        }
      });
    });
  })

  //let promise = /* Promise.resolve() */.then(() => {//import('../lib/services').then(services => {
    /* fetch('assets/img/camomile.jpg')
    .then(res => res.blob())
    .then(blob => {
      let img = new Image();
      let url = URL.createObjectURL(blob);
      img.src = url;
      img.onload = () => {
        let id = 'chat-background-canvas';
        var canvas  = document.getElementById(id) as HTMLCanvasElement;
        //URL.revokeObjectURL(url);
  
        let elements = ['.chat-container'].map(selector => {
          return document.querySelector(selector) as HTMLDivElement;
        });
  
        stackBlurImage(img, id, 15, 0);
  
        canvas.toBlob(blob => {
          //let dataUrl = canvas.toDataURL('image/jpeg', 1);
          let dataUrl = URL.createObjectURL(blob);
  
          elements.forEach(el => {
            el.style.backgroundImage = 'url(' + dataUrl + ')';
          });
        }, 'image/jpeg', 1);
      };
    }); */
  
    /* toggleEmoticons.onclick = (e) => {
      if(!emoticonsDropdown) {
        emoticonsDropdown = initEmoticonsDropdown(pageEl, appImManager, 
          appMessagesManager, messageInput, toggleEmoticons);
      } else {
        emoticonsDropdown.classList.toggle('active');
      }
  
      toggleEmoticons.classList.toggle('active');
    }; */
  //});

  return promise;
};

const page = new Page('page-chats', false, onFirstMount);
export default page;

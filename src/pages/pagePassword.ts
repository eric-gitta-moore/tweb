import pageIm from './pageIm';
//import CryptoWorker from '../lib/crypto/cryptoworker';
//import apiManager from '../lib/mtproto/apiManager';
import { putPreloader } from '../components/misc';

import LottieLoader, { RLottiePlayer } from '../lib/lottieLoader';
//import passwordManager from '../lib/mtproto/passwordManager';
import apiManager from '../lib/mtproto/mtprotoworker';
import Page from './page';
import passwordManager from '../lib/mtproto/passwordManager';
import { cancelEvent } from '../lib/utils';
import { AccountPassword } from '../layer';
import mediaSizes from '../helpers/mediaSizes';

let passwordInput: HTMLInputElement;

let onFirstMount = (): Promise<any> => {
  let needFrame = 0;
  let animation: RLottiePlayer;

  let passwordVisible = false;

  const btnNext = page.pageEl.querySelector('button') as HTMLButtonElement;
  passwordInput = document.getElementById('password') as HTMLInputElement;
  const passwordInputLabel = passwordInput.nextElementSibling as HTMLLabelElement;
  const toggleVisible = page.pageEl.querySelector('.toggle-visible') as HTMLSpanElement;

  let getState = () => {
    return passwordManager.getState().then(_state => {
      state = _state;

      passwordInputLabel.innerText = state.hint ?? 'Password';
    });
  };

  let handleError = (err: any) => {
    btnNext.removeAttribute('disabled');
    
    switch(err.type) {
      default:
        btnNext.innerText = err.type;
        break;
    }

    getState();
  };

  const onVisibilityClick = function(this: typeof toggleVisible, e: Event) {
    cancelEvent(e);
    passwordVisible = !passwordVisible;

    this.classList.toggle('tgico-eye2', passwordVisible);
    if(passwordVisible) {
      passwordInput.setAttribute('type', 'text');
      animation.setDirection(1);
      animation.curFrame = 0;
      needFrame = 16;
      animation.play();
    } else {
      passwordInput.setAttribute('type', 'password');
      animation.setDirection(-1);
      animation.curFrame = 16;
      needFrame = 0;
      animation.play();
    }
  };

  toggleVisible.addEventListener('click', onVisibilityClick);
  toggleVisible.addEventListener('touchend', onVisibilityClick);

  let state: AccountPassword;
  
  btnNext.addEventListener('click', function(this, e) {
    if(!passwordInput.value.length) {
      passwordInput.classList.add('error');
      return;
    }

    this.setAttribute('disabled', 'true');
    let value = passwordInput.value;

    this.textContent = 'PLEASE WAIT...';
    putPreloader(this);

    passwordManager.check(value, state).then((response: any) => {
      //console.log('passwordManager response:', response);
        
      switch(response._) {
        case 'auth.authorization':
          apiManager.setUserAuth({
            id: response.user.id
          });
  
          pageIm.mount();
          if(animation) animation.remove();
          break;
        default:
          btnNext.removeAttribute('disabled');
          btnNext.innerText = response._;
          break;
      }
    }).catch(handleError);
  });

  passwordInput.addEventListener('keypress', function(this, e) {
    this.classList.remove('error');

    if(e.key == 'Enter') {
      return btnNext.click();
    }
  });

  /* passwordInput.addEventListener('input', function(this, e) {
    
  }); */
  const size = mediaSizes.isMobile ? 100 : 166;
  return Promise.all([
    LottieLoader.loadAnimationFromURL({
      container: page.pageEl.querySelector('.auth-image'),
      loop: false,
      autoplay: false,
      width: size,
      height: size,
      noCache: true
    //}, 'assets/img/TwoFactorSetupMonkeyClose.tgs').then(_animation => {
    }, 'assets/img/TwoFactorSetupMonkeyPeek.tgs').then(_animation => {
      //return;
      animation = _animation;
      animation.addListener('enterFrame', currentFrame => {
        //console.log('enterFrame', e, needFrame);

        if((animation.direction == 1 && currentFrame >= needFrame) ||
          (animation.direction == -1 && currentFrame <= needFrame)) {
            animation.setSpeed(1);
            animation.pause();
        } 
      });
  
      needFrame = 49;
      //animation.play();
    }),

    getState()
  ]);
};

const page = new Page('page-password', true, onFirstMount, null, () => {
  passwordInput.focus();
});

export default page;

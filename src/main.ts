import App from './components/App.svelte';
import { code } from './common/stores/code.js';

code.subscribe((v) => {
  var searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get('code') === null) {
    localStorage.setItem('code', v);
  } else {
    var codeParam = searchParams.get('code');
    var codeValue = decodeURI(v);
    if (codeParam != codeValue) {
      searchParams.set('code', v);
      var newQuery = window.location.pathname + '?' + searchParams.toString();
      history.pushState(null, '', newQuery);
    }
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.ctrlKey && evt.key === 's') {
    evt.preventDefault();
  }
  if (evt.ctrlKey && evt.shiftKey && evt.key === 'D') {
    evt.preventDefault();
  }
})

const app = new App({
  target: document.getElementById('root')!,
})

export default app
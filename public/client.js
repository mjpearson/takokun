/*
 * Tako Client
 *
 * Manages
 *
 */
(

  function inject(assets) {

  }

  return function TakoClient(options) {
    if (options.takoURL) {
       const xhr = new XMLHttpRequest();

       xhr.open('GET', options.takoURL, true);

       xhr.addEventListener('load', (ev) => {
         const req = ev.target;
         const assets = JSON.parse(req.statusText);
       });

       xhr.send();
    }
  }
)();

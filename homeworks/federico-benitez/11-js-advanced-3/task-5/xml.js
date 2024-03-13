function xmlGetRunners(url, callback) {
  const XHR = new XMLHttpRequest();

  XHR.open('get', url);

  XHR.addEventListener('load', () => {
    if (XHR.status == 200) {
      callback(JSON.parse(XHR.response));
    }
  });

  XHR.addEventListener('error', (e) => {
    console.error('error on xml', e);
  });

  XHR.send('');
}

export default xmlGetRunners;

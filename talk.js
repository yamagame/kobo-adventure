const fetch = require('node-fetch');

const ipaddress = 'localhost'

module.exports = function(body) {
  (async () => {
    console.log(body);
    try {
      const response = await fetch(`http://${ipaddress}:3090/speech`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body,
      });
      if (response.ok) {
        const text = await response.text();
        console.log(text);
      }
    } catch(err) {
    }
  })();
}

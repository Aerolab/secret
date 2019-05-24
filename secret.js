const secret = '???'; // <- AL FINAL siempre encontramos la respuesta
const encoded =
  '181.189.181.197.192.131.112.132.187.184.166.200.185.184.178.202.178.185.162.199.178.172.166.131.196.178.177.131.174.174.179.196.185.170.163.131.176.184';

const decode = (e, s) => {
  const decodedChars = e.split('.').map((c, i) => {
    const number = parseInt(c, 10);
    const offset = s.charAt(i % s.length).charCodeAt(0);
    return String.fromCharCode(c - offset);
  });
  return decodedChars.join('');
};

const url = decode(encoded, secret);

// Entrá a la web de Aerolab (es aerolab.co, aerolab.com nos ganó de mano) y saludá al querido Doge.
// Él sabe nuestro secret :wink:

const secret = '???'; // <-
const encoded =
  '175.227.227.212.184.168.158.164.213.215.185.226.191.215.218.229.172.223.208.214.170.209.212.163.222.209.196.157.180.205.219.223.179.208.209.146.168.221';

const decode = (e, s) => {
  const decodedChars = e.split('.').map((c, i) => {
    const number = parseInt(c, 10);
    const offset = s.charAt(i % s.length).charCodeAt(0);
    return String.fromCharCode(c - offset);
  });
  return decodedChars.join('');
};

const url = decode(encoded, secret);

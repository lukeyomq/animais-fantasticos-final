export default function fetchBitcoin(target) {
  const precoBitcoin = document.querySelector(target);

  async function valorBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();

      precoBitcoin.innerText = (500 / bitcoinJson.BRL.buy).toFixed(5);
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  valorBitcoin("https://blockchain.info/ticker");
}

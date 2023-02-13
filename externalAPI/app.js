var myHeaders = new Headers();
myHeaders.append("apikey", "64GOEmPBtiBBb3aXEBDA2kz1BRB3GQ7D");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=500", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


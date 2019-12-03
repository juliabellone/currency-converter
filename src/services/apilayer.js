

export const getAllCurrencies = async() => {
  const data = await fetch('http://apilayer.net/api/list?access_key=aeae5c476f3927d585531d23456b680a&format=1')
  const res = await data.json();
  return res;
}

export const getExchangeRate = async(to) => {
  const data = await fetch(`http://apilayer.net/api/live?access_key=aeae5c476f3927d585531d23456b680a&currencies=${to}`)
  const res = await data.json();
  return res;
}

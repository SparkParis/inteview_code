/**
 * url短链接生成
 */
// 十进制转化为62进制
function parse(number, num = 6) {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charArr = chars.match(/./g);
  const radix = charArr.length;
  let res = new Array(num).fill(0);
  let index = num;
  number = +number;
  console.log(typeof number, number, num, charArr.length, res);
  while (number) {
    let mod = number % radix;
    number = (number - mod) / radix;
    res[--index] = charArr[mod];

  }
  console.log(res, 'res');
  return res.join('');
}
// console.log(parse(34224));
// 摘要算法：摘要算法又称哈希算法，它表示输入任意长度的数据，输出固定长度的数据。相同的输入数据始终得到相同的输出，不同的输入数据尽量得到不同的输出。
//随机生成的方式，然后去数据中查找是否存在，存在，则重新生成，
function generateShortLink() {
  let str = '';
  const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  for (let i = 0; i < 6; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
}

async getShortLink() {
  const shortLink = this.generateShortLink();

  // 查询数据库中是否存在该链接，如果存在，就直接返回
  const searchResult = await this.searchByLinkInMySQL(shortLink);

  if (searchResult && searchResult.length > 0) {
    // 如果shortLink已经存在，就遍历重新生成
    return this.getShortLink();
  }
  return shortLink;

}



var buf = Buffer.allocUnsafe(20);
var output = '안녕 새로운 버퍼야!';
var len = buf.write(output, 'utf8');
console.log(len);
console.log(buf.toString());
console.log(Buffer.isBuffer(buf));
var byteLen = Buffer.byteLength(buf);
console.log(byteLen);
var str1 = buf.toString('utf8', 0, 25);
console.log(str1);
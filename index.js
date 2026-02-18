const bedrock = require('bedrock-protocol');
const http = require('http');

// 1. إنشاء سيرفر ويب بسيط لإيهام Render أن البوت "تطبيق ويب" نشط
http.createServer((req, res) => {
  res.write("Bot is Running!");
  res.end();
}).listen(8080);

// 2. إعدادات اتصال البوت بالسيرفر
const client = bedrock.createClient({
  host: 'ourserverw.falixsrv.me',   // تأكد من وجود علامة الاقتباس في البداية والنهاية
  port: 24241,                     
  username: 'Bot_24_7',            
  offline: true,                   
  version: '1.26.0'                
});

client.on('text', (packet) => {
  console.log(`Message: ${packet.message}`);
});

console.log("Bot is starting...");
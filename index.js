const bedrock = require('bedrock-protocol');
const http = require('http');

// السيرفر الوهمي لإبقاء Render مستيقظاً
http.createServer((req, res) => {
  res.write("Bot is alive!");
  res.end();
}).listen(8080);

const client = bedrock.createClient({
  host: 'ourserverw.falixsrv.me',
  port: 24241,
  username: 'AFK_Bot_00', 
  offline: true,
  // حذفنا سطر version ليقوم البوت بالتوافق تلقائياً مع السيرفر
});

client.on('join', () => {
  console.log("تم الدخول للسيرفر بنجاح! البوت الآن أونلاين.");
});

client.on('error', (err) => {
  console.log("خطأ في الاتصال: " + err.message);
});

client.on('kick', (reason) => {
  console.log("السيرفر طرد البوت لسبب: " + JSON.stringify(reason));
});

// HTTPパッケージを読み込み
var http = require('http');

// WebServerObjectを作成
var server = http.createServer();
// HTTP RequestがあったらdoRequestで処理
server.on('request', doRequest);
// リクエストを受け取るポートを指定
server.listen(1234);
console.log('Server running!');

// リクエストの処理
function doRequest(req, res) {
    // ヘッダー
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // 出力
    res.write('Hello World\n');
    // 終了
    res.end();
}

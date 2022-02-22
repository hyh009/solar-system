# solar-system



開啟網頁的方法
1. npm install
2. 修改node_modules/metro-bundler/src/blacklist.js<br/>
將sharedBlacklist更改為下方內容：
```javascript:
var sharedBlacklist = [
/node_modules[\/\\]react[\/\\]dist[\/\\].*/,

/website\/node_modules\/.*/,

/heapCapture\/bundle\.js/,

/.*\/__tests__\/.*/];

```
3. npm run bundle
4. 將static_asset的資料夾放入vr/build資料夾中
5. npm start

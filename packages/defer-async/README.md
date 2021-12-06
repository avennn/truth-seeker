# defer-async

验证 script 的 defer 和 async 属性的作用和差异

## 场景

- html 解析快，async 脚本下载快、执行快。是否 DOMContentLoaded 比 async 脚本执行晚？是否属于 async.js 下载时间长于 html 解析时间？
- html 解析慢，async 脚本下载快、执行慢。是否 async 脚本执行比 DOMContentLoaded 晚？

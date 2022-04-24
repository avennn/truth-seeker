const fs = require('fs');
const dayjs = require('dayjs');

setInterval(() => {
  fs.writeFileSync(
    './pInterval.log',
    dayjs().format('YYYY-MM-DD HH:mm:sss') + '\n',
    {
      flag: 'a',
    }
  );
}, 1000 * 60 * 10); // 每10分钟

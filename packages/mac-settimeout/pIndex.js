const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const dayjs = require('dayjs');

const startPath = path.join(__dirname, './p.js');
const subProcess = spawn('node', [startPath], {
  detached: true,
  stdio: [null, null, null, 'ipc'],
});

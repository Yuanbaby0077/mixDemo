const { spawn } = require('child_process');
const path = require('path')

console.log(process.platform)
const ls = spawn('ls', ['-lh'], {
  cwd: path.resolve(__dirname, '', '../../src')
})

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`子进程退出，退出码 ${code}`);
});
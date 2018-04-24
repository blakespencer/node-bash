const pwd = require('./pwd');
const fs = require('fs');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('prompt > ')

process.stdin.on('data', data => {
  const cmd = data.toString().trim()

  if (cmd === 'pwd') {
    pwd()
  } else if (cmd === 'ls') {
    ls()
  } else if (cmd.includes('cat')) {
    args = cmd.split(" ");
    process.stdout.write(args[1]);
    cat(args[1]);
  }

  process.stdout.write('\nprompt > ')
})

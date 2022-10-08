import os from 'os'

const platform = os.platform() // win32
const arch = os.arch() // x64 => CPU bits
const cpus = os.cpus() // 8 cpu objects
const freeMemory = os.freemem() // 3810816000 bytes
const totalMemory = os.totalmem() // 8293109760 bytes
const uptime = os.uptime() // 3111

console.log(uptime)
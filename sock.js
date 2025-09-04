(function () {
    'use strict';
	Lampa.Platform.tv();
	
function validateIP(ip) {
  const parts = ip.split('.');
  if (parts.length !== 4) return false;
  for (const part of parts) {
    const num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 255) return false;
  }
  return true;
}

function checkPort(ip) {
  const ws = new WebSocket(`ws://${ip}:8090`);
  ws.onerror = function(e) {
    console.log(`Port is closed on IP address ${ip}`);
    ws.close();
  };
  ws.onopen = function() {
    console.log(`Port is open on IP address ${ip}`);
    ws.close();
  };
}
/*
for(let i = 2; i < 255; i++) {
  const ip = `192.168.0.${i}`;
  if (validateIP(ip)) {
    setInterval(() => {
        checkPort(ip);
    }, 10);
  }
}
*/
for(let i = 150; i < 165; i++) {
  const ip = `192.168.1.${i}`;
  if (validateIP(ip)) {
    setInterval(() => {
        checkPort(ip);
    }, 10);
  }
}

 })(); 
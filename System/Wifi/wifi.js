var wpa = require('wpa_supplicant')
var wifi = wpa()

var list = {};
wifi.on('ready', function () {
    //console.log('scanning');
    wifi.scan();
})
wifi.on('update', function () {
    var newList = [];
    var n = wifi.currentNetwork
    if (n) newList.push({"ssid": n.ssid, "bssid": Array.from(n.bssid), "frequency": n.frequency, "signal": n.signal, "age": n.age, "added": n.added, "current": true});
    // console.log('Current network:', cur && cur.ssid)
    // console.log('Available networks:', wifi.networks.length)
    wifi.networks.forEach(function (n) {
        newList.push({"ssid": n.ssid, "bssid": Array.from(n.bssid), "frequency": n.frequency, "signal": n.signal, "age": n.age, "added": n.added, "rsn": n.rsn, "current": false});
    })
    //console.log("found", newList.length, "networks")
    list = newList
})
wifi.on('error', (err) => {
    list = [{"error": err}];
})

exports.getList = function () {
    return JSON.stringify(list);
};
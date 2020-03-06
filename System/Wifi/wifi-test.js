var wpa = require('wpa_supplicant')

var wifi = wpa()

wifi.on('ready', function () {
    wifi.scan();
})

wifi.on('update', function () {
    var cur = wifi.currentNetwork
    console.log('Current network:', cur && cur.ssid, cur && cur.bssid)
    console.log('Available networks:')
    wifi.networks.forEach(function (n) {
        console.log(n.ssid, n.bssid, n.frequency, n.signal, n.age, n.added)
    })
})
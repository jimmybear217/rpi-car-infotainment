let wifi_list = [];
let wifi_connected = -1;
let wifi_connected_bssid = []

function api_setings_wifi(action='scan') {
	switch (action) {
		case 'scan':
		default:
			fetch(new Request('/api/wifi'))
			.then((response) => {return response.json()})
			.then(api_settings_wifi_handle_scan)
			break;
	}
}

// callback wifi list
function api_settings_wifi_handle_scan (bodyJson) {
	// receive wifi list
	wifi_list = [];
	var i = wifi_list.length;
	wifi_connected_bssid = [];
	bodyJson.forEach(wifi => {
		if (wifi.current == true){
			wifi_connected_bssid = wifi.bssid;
			wifi_connected = i;
		} else {
			if (wifi_connected_bssid == wifi.bssid && wifi_connected_bssid != []) {
				wifi_connected = i;
			}
		}
		wifi_list.push({"ssid": wifi.ssid, "bssid": Array.from(wifi.bssid), "frequency": wifi.frequency, "signal": wifi.signal, "age": wifi.age, "added": wifi.added})
		i++
	});
	api_setings_wifi_write_list()
}

function api_setings_wifi_write_list() {
	// write wifi list
	if (wifi_connected_bssid == []){
		wifi_connected = -1;
		// hide connected wifi
		console.log("not connected to any wifi", wifi_connected_bssid);

		// system bar
		document.getElementById("img-status-wifi").style.display = "none";

		// wifi list: connected
		document.getElementById("wifi-list-connected").style.display = "none";
		document.getElementById("wifi-list-connected").children[0].setAttribute("data-wifi-id", wifi_connected)
		document.getElementById("wifi-list-connected").children[0].innerText = "<not connected>"

	} else {
		// show connected wifi
		console.log("connected to wifi", wifi_connected, wifi_connected_bssid);

		// system bar
		document.getElementById("img-status-wifi").style.display = "";

		// wifi list: connected
		document.getElementById("wifi-list-connected").style.display = "";
		document.getElementById("wifi-list-connected").children[0].setAttribute("data-wifi-id", wifi_connected)
		if (wifi_list[wifi_connected]["ssid"].length > 0)
			document.getElementById("wifi-list-connected").getElementsByTagName("li")[0].innerText = wifi_list[wifi_connected]["ssid"]
		else {
			document.getElementById("wifi-list-connected").getElementsByTagName("li")[0].innerText = wifi_list[wifi_connected]["bssid"].join(":")
		}
	}

	// wifi list: available
	var ul = document.getElementById("wifi-list-available");
	Array.from(ul.getElementsByTagName("li")).map( (elem) => {
		elem.parentElement.removeChild(elem);
	})
	//maybe: if visible only

	// group wifi networks by ESSID
	visible_keys = [];
	visible_list = {};
	hidden_list = {};
	wifi_list.forEach( (elem, index, arr) => {
		if (elem.ssid == wifi_list[wifi_connected].ssid || elem.bssid == wifi_connected_bssid)
			return elem;
		name = elem.ssid
		if (name.length < 1) {
			name = elem.bssid.join(":");
			hidden_list[name] = {
				"index": index,
				"bssid": elem.bssid,
				"signal": elem.signal,
				"frequency": elem.frequency,
				"age": elem.age
			}
		} else {
			if (visible_list.hasOwnProperty(name)) {
				visible_list[name].index = index
				visible_list[name].bssid = elem.bssid
				visible_list[name].signal = elem.signal
				visible_list[name].frequency = elem.frequency
				visible_list[name].age = elem.age
			} else {
				visible_keys.push(name);
				visible_list[name] = {
					"index": index,
					"ssid": elem.ssid,
					"bssid": elem.bssid,
					"signal": elem.signal,
					"frequency": elem.frequency,
					"age": elem.age
				}
			}
		}
	})
	// sort wifi list by strength
	var visible_keys_sorted = visible_keys
	var glass = undefined;
	visible_keys.forEach( () => {
		for (i = 0; i < visible_keys_sorted.length-1; i++){
			if (visible_list[visible_keys_sorted[i]].signal < visible_list[visible_keys_sorted[i+1]].signal) {
				glass = visible_keys_sorted[i];
				visible_keys_sorted[i] = visible_keys_sorted[i+1]
				visible_keys_sorted[i+1] = glass
			}
		}
	})


	console.log("visible:", visible_list);
	visible_keys.forEach( (key) => {
		var newElem = document.createElement("li")
		newElem.setAttribute("data-wifi-id", visible_list[key].index)
		newElem.innerText = visible_list[key].ssid
		ul.appendChild(newElem)
		//console.log("appended:", newElem);
	})
	//console.log("hidden:", hidden_list);
}
function goto(page='menu') {
	Array.from(document.getElementsByClassName('page')).map( (el, id, col) => {
		if (el.id == page) {
			el.setAttribute("data-visible", "true");
			el.dispatchEvent(new Event("load"));
		} else {
			el.setAttribute("data-visible", "false");
		}
	})
	if (page == 'menu') {
		document.getElementById('svg-menu').style.display = "none";
	} else {
		document.getElementById('svg-menu').style.display = "inherit";
	}
	if (page == 'home') {
		document.getElementById('time-container-h').style.display = "none";
	} else {
		document.getElementById('time-container-h').style.display = "inherit";
	}
	if (page == 'settings') {
		Array.from(document.getElementsByClassName('settings-menu-button')).map( (el) => {
			if (el.getAttribute("data-current") == 'true') {
				goto_setting(el.getAttribute('data-goto'));
			}
		})
	}
}

function goto_setting(setting='home') {
	Array.from(document.getElementsByClassName('setting-page')).map( (el, id, col) => {
		if (el.id ==  'settings-' + setting) {
			el.setAttribute("data-visible", "true");
			el.dispatchEvent(new Event("load"));
		} else {
			el.setAttribute("data-visible", "false");
		}
	})
	Array.from(document.getElementsByClassName('settings-menu-button')).map( (el, id, col) => {
		if (el.getAttribute("data-goto") == setting) {
			el.setAttribute('data-current', 'true');
		} else {
			el.setAttribute('data-current', 'false');
		}
	})
}
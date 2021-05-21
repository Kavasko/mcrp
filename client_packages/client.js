let browser;

mp.keys.bind(0x73, true, function() {
	if(browser === undefined) {
		browser = mp.browsers.new("package://assets/index.html");
	} else {
		browser.destroy();
		browser = undefined;
	}
	let state = !mp.gui.cursor.visible
	mp.gui.cursor.show(state, state);
});

mp.events.add("closeBrowser", () => {
		browser.destroy();
		browser = undefined;
		let state = !mp.gui.cursor.visible
		mp.gui.cursor.show(state, state);
});
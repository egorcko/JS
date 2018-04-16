function myModule() {
	this.hello = function () {
		return console.log('Hello!');
	}
	this.goodbye = function () {
		return console.log('Goodbye');
	}
}

module.exports = myModule;
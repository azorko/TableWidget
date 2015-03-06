(function () {
	
	var Table = window.Table = window.Table || {};
	
	var Widget = Table.Widget = function (el, doc, jsonObj, headers, options) {
	this.el = el;
	this.doc = doc;
	this.obj = JSON.parse(jsonObj);
	this.headers = headers; //array
	this.options = options;
	
	this.setupTable();
};

Widget.prototype.setupHeaders = function () {
	var i, len = this.headers.length, header, headerRow;
	headerRow = this.doc.createElement("div");
	headerRow.classList.add("headers");
	this.el.appendChild(headerRow);
	for (i = 0; i < len; i++) {
		header = this.doc.createElement("div");
		header.innerText = this.headers[i];
		header.classList.add("cell");
		headerRow.appendChild(header);
	}
};

Widget.prototype.setupTable = function () {
	var i, numObjs = this.obj.length;
	
	this.setupOptions();
	this.el.classList.add("table");
	if (this.title) { this.setupTitle(); }
	this.setupHeaders();
	for (i = 0; i < numObjs; i++) {
		this.setupRow(i);
	}
};

Widget.prototype.setupOptions = function () {
	if (this.options.title) { this.title = this.options.title; }
};

Widget.prototype.setupRow = function (rowNum) {
	var i, row, cell, numHeaders = this.headers.length, header;
	
	row = this.doc.createElement("div");
	row.classList.add("row");
	
	for (i = 0; i < numHeaders; i++) {
		cell = this.doc.createElement("div");
		cell.classList.add("cell");
		if (this.obj[rowNum][this.headers[i]]) {
			cell.innerText = this.obj[rowNum][this.headers[i]];
	  }
		row.appendChild(cell);
	}
	this.el.appendChild(row);
};

Widget.prototype.setupTitle = function () {
	var title = this.doc.createElement("div");
	title.innerText = this.title;
	title.classList.add("title");
	this.el.appendChild(title);
};

})();
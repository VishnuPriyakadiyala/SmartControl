/*global QUnit*/

sap.ui.define([
	"sapui5md/smartcontrols/controller/listprep.controller"
], function (Controller) {
	"use strict";

	QUnit.module("listprep Controller");

	QUnit.test("I should test the listprep controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

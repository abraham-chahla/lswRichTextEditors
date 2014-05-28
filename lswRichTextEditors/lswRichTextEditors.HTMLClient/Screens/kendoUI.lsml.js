﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/// <reference path="../scripts/lswrichtexteditors.js" />

myapp.kendoUI.Body_render = function (element, contentItem) {

	// Lets give the editor 80% of the screen, overall good compromise.
	element.style.maxHeight = '80%';

	// Wire up our kendo editor
	lsWire.editors.initializeKendoEditor(element, contentItem);

};


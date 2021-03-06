/*
 * feature-viewer
 * https://github.com/calipho-sib/feature-viewer
 *
 * Copyright (c) 2015 Calipho - SIB
 * Licensed under the GNU GPL v2 license.
 */

/**
 @class FeatureViewer
 */

global.jQuery = $ = require("jquery");
d3 = require("d3");
//require ("bootstrap");
// require("tooltip.js");
// require("popover.js");
require("bootstrap/js/dist/tooltip.js");
require("bootstrap/js/dist/popover.js");

var FeatureViewer = require("../src/feature-viewer.js");
console.log('I deleted this'); 
//Optionnal : usage with nextprot
//Nextprot = require("nextprot/src/nextprot-core.js");
//NXUtils = require("nextprot/src/nextprot-utils.js")["NXUtils"];
//NXViewerUtils = require("nextprot/src/nextprot-utils.js")["NXViewerUtils"];

//Optionnal : usage with nextprot
//nxFeatureViewer = require("../src/fv.nextprot.js");



require("biojs-events").mixin(FeatureViewer.prototype);
module.exports = FeatureViewer;

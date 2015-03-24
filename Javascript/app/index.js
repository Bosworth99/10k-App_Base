///////////////////////////////////////////////////////////////////////////
//
//  @package    : SMC
//  @class      : App_Index
//
///////////////////////////////////////////////////////////////////////////

define(function(require){

    // @imports
    var App_Core    = require('app/core');
    var App_Utility = require('app/utility');

    // Class //////////////////////////////////////////////////////////////////
    var App_Index = function(){

        console.log('App_Index');

        var _core       = new App_Core();
        var _utility    = App_Utility();

        _core.init();

        return {
            Core : _core,
            Utility : _utility
        }

	};
    
    // Export /////////////////////////////////////////////////////////////////
	return App_Index;

});
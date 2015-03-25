///////////////////////////////////////////////////////////////////////////
//
//  @package    : SMC
//  @class      : App_Index
//  @comment    : instantiate application core and apply static resources to the global app
//
///////////////////////////////////////////////////////////////////////////

define(function(require){

    // @imports
    var App_Core    = require('app/core');
    var App_Utility = require('app/utility');
    var App_Config  = require('app/config')
    var App_Const   = require('app/const');

    // Class //////////////////////////////////////////////////////////////////
    var App_Index = function(){

        var _core       = new App_Core();
        _core.init();

        return {
            Core        : _core,
            Config      : App_Config,
            Const       : App_Const,
            Utility     : App_Utility
        }

	};
    
    // Export /////////////////////////////////////////////////////////////////
	return App_Index;

});
///////////////////////////////////////////////////////////////////////////
//
//  @package    : SMC
//  @class      : Inbox_Index
// 	@comment	: control the instantiation and lifecycle of Inbox module 
//
///////////////////////////////////////////////////////////////////////////

define(function(require){
    "use strict";

	// INCLUDES ///////////////////////////////////////////////////////////////
	var Radio = require('backbone.radio');

    // CLASS //////////////////////////////////////////////////////////////////
    var Inbox_Index = function(){

    	// module instances 
        var _dispatcher;

    	function init(){
    		console.log('Inbox_Index::init');

            _dispatcher     = Radio.channel('dispatcher');
    	}
   		
    	return {
    		init : init
    	}
	};
    
    // EXPORT /////////////////////////////////////////////////////////////////
	return Inbox_Index;

});
# LNI / Behaviors / Backbone Sync Shim

A shim to overwrite Backbone.sync to seamlessly integrate with the LNI API.

## Requirements

* Backbone

## Installation

Include in bower.json:

```json
{
   "dependencies" : {
       "orca-lni-utils-backbone-sync-shim": "https://orcasoftware@bitbucket.org/orcasoftware/lni-utils-backbone-sync-shim.git",
   }
}
```

From a command line (soon to be a .bat file), run:

```bash
bower install
```

Add to your app

```javascript
require.config({
    paths: [
        {
            "backbone.sync.shim": "../components/orca-lni-utils-backbone-sync-shim/backbone.sync.shim"
        }
    ]
});
```

## Usage

Require the modal via requirejs

```javascript
require([
    'backbone.sync.shim'
], function(
    Sync
)
```

At the beginning of your main app file, override the default Backbone sync.

```javascript
Backbone.origSync = Backbone.sync;
Backbone.sync = SyncShim;
```
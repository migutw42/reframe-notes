
shadow.cljs.devtools.client.env.module_loaded('app');

try { reframe_notes.core.init(); } catch (e) { console.error("An error occurred when calling (reframe-notes.core/init)"); throw(e); }
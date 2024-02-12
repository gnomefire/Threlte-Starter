export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "tute-threlte/_app",
	assets: new Set([".nojekyll","favicon.png","models/threlte.glb"]),
	mimeTypes: {".png":"image/png",".glb":"model/gltf-binary"},
	_: {
		client: {"start":"_app/immutable/entry/start.BH3QesJM.js","app":"_app/immutable/entry/app.CtUltbh1.js","imports":["_app/immutable/entry/start.BH3QesJM.js","_app/immutable/chunks/entry.CTx0-UbM.js","_app/immutable/chunks/scheduler.C0bs57FV.js","_app/immutable/chunks/paths.DKVym3Ib.js","_app/immutable/entry/app.CtUltbh1.js","_app/immutable/chunks/scheduler.C0bs57FV.js","_app/immutable/chunks/index.BUyZdqt5.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

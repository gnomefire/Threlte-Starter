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
		client: {"start":"_app/immutable/entry/start.DDdJCU7q.js","app":"_app/immutable/entry/app.Dm3qu3ni.js","imports":["_app/immutable/entry/start.DDdJCU7q.js","_app/immutable/chunks/entry.wzEf5Ryn.js","_app/immutable/chunks/scheduler.C0bs57FV.js","_app/immutable/chunks/paths.B5S0hZNg.js","_app/immutable/entry/app.Dm3qu3ni.js","_app/immutable/chunks/scheduler.C0bs57FV.js","_app/immutable/chunks/index.DS5UkMoq.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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

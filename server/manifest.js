const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Portfolio-Website/_app",
	assets: new Set([".nojekyll","ArtSelectIconBlue.png","balloonBlaster.png","blinker.gif","bugwalk.gif","cain.png","cainAnimation.gif","crawler.gif","cv.jpeg","desktop.ini","detective.gif","GameSelectIconBlue.png","godIsDead.gif","hand.gif","HeaderImg.png","Kacie.jpeg","kraft.gif","mikkel.png","monochrome.png","Placeholder.png","puppeteer.png","reaper.png","RoboWalk.gif","shortCircuit.png","styles/global.css","zero1.png","Zero2.png","zeroAnimation.gif"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".jpeg":"image/jpeg",".ini":"text/plain",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.B8lBHKK7.js",app:"_app/immutable/entry/app.lHOphx7K.js",imports:["_app/immutable/entry/start.B8lBHKK7.js","_app/immutable/chunks/DgWED3Zr.js","_app/immutable/chunks/Bu00k6R7.js","_app/immutable/chunks/DPA9QTaU.js","_app/immutable/entry/app.lHOphx7K.js","_app/immutable/chunks/DgWED3Zr.js","_app/immutable/chunks/6O37bfvL.js","_app/immutable/chunks/BFhtdhJu.js","_app/immutable/chunks/CFku7UP8.js","_app/immutable/chunks/DPA9QTaU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BrTXZVbG.js')),
			__memo(() => import('./chunks/1-B8PHNwtX.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/Portfolio-Website/","/Portfolio-Website/About-Me","/Portfolio-Website/Animations","/Portfolio-Website/Art-Catagories","/Portfolio-Website/CV","/Portfolio-Website/Digital-Art","/Portfolio-Website/Game-Catagories","/Portfolio-Website/Games-College","/Portfolio-Website/Games-Personal"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/Portfolio-Website/","/Portfolio-Website/About-Me","/Portfolio-Website/Animations","/Portfolio-Website/Art-Catagories","/Portfolio-Website/CV","/Portfolio-Website/Digital-Art","/Portfolio-Website/Game-Catagories","/Portfolio-Website/Games-College","/Portfolio-Website/Games-Personal"]);

const base = "/Portfolio-Website";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map

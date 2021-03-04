const modules = {};

core.loadModules = function()
{
	const matchs = glob.sync(".bolt/*.js",{nodir: true});
	for (let match of matchs)
	{
		let module = path.parse(match).name;
		if (module in Boltfile.modules) modules[module] = require(process.cwd() + "/" + match);
	};
};

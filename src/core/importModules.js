core.importModules = async function()
{
	if (helper.isNotPath("./.bolt")) fs.mkdirSync("./.bolt");
	else if (helper.isNotDirectory("./.bolt")) helper.throwError(`".bolt" is not a directory`);

	for (let module in Boltfile.modules)
	{
		if (helper.isNotString(Boltfile.modules[module])) helper.throwError(`Bad formatted module "${module}" in Boltfile`);
		try
		{
			await fetch(Boltfile.modules[module])
				.then(function(RESPONSE)
				{
					if (!RESPONSE.ok) helper.throwError(`File "${Boltfile.modules[module]}" not found`);
					return RESPONSE.text();
				})
				.then(function(RESPONSE) {fs.writeFileSync("./.bolt/" + module + ".js",RESPONSE)});
		}
		catch (EXCEPTION)
		{
			helper.throwError(`Invalid URL "${Boltfile.modules[module]}"`);
		};
	};
};

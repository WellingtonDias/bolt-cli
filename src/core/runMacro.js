const macroRegex = /^([\w-]+?):([\w-]+?)$/;

core.runMacro = async function(MACRO)
{
	const macro = Boltfile.macros[MACRO];
	if (helper.isString(macro)) var tasks = [macro];
	else if (helper.isArray(macro))
	{
		for (let task of macro)
		{
			if (helper.isNotString(task)) helper.throwError(`Bad formatted task "${task}" in macro "${MACRO}"`);
		};
		var tasks = macro;
	}
	else helper.throwError(`Bad formatted macro "${MACRO}" in Boltfile`);

	for (let task of tasks)
	{
		let matchs = macroRegex.exec(task);
		if (matchs !== null)
		{
			var module = matchs[1];
			var name = matchs[2];
		}
		else
		{
			var module = task;
			var name = "default";
		};
		if (module in Boltfile)
		{
			if (!(module in modules)) helper.throwError(`Module "${module}" not imported`);
			await core.runTask(module,name);
		}
		else if (module in Boltfile.macros) await core.runMacro(module);
		else helper.throwError(`Task/Macro "${module}" not defined in Boltfile`);
	};
};

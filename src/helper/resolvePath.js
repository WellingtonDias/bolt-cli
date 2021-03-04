helper.resolvePath = function(PATHS,OPTIONS = {})
{
	if (helper.isString(PATHS)) var toResolve = [PATHS];
	else if (helper.isArray(PATHS)) var toResolve = PATHS;
	else helper.throwError(`Bad formatted path(s) "${PATHS}"`);

	let paths = [];
	for (let resolveItem of toResolve)
	{
		if (helper.isString(resolveItem)) var toExpand = [resolveItem];
		else if (helper.isArray(resolveItem))
		{
			if ((resolveItem.length !== 3) || helper.isNotString(resolveItem[0],{strict: false}) || helper.isNotArray(resolveItem[1]) || helper.isNotString(resolveItem[2],{strict: false})) helper.throwError(`Bad formatted handle "${resolveItem}" in path(s) "${PATHS}"`);
			var toExpand = [];
			for (let handleItem of resolveItem[1])
			{
				if (helper.isNotString(handleItem)) helper.throwError(`Bad formatted item "${handleItem}" in path(s) "${PATHS}"`);
				toExpand.push(`${resolveItem[0]}${handleItem}${resolveItem[2]}`);
			};
		}
		else helper.throwError(`Bad formatted path "${resolveItem}" in path(s) "${PATHS}"`);

		const options = {strict: true,directory: true,...OPTIONS};
		for (let expandItem of toExpand)
		{
			let matchs = glob.sync(expandItem,{nodir: !options.directory});
			if (matchs.length > 0) paths = paths.concat(matchs);
			else if (options.strict) helper.throwError(`Path "${expandItem}" not found`);
			else helper.throwWarning(`Path "${expandItem}" not found`);
		};
	};
	return paths;
};

core.runTask = async function(MODULE,TASK)
{
	if (TASK === "default") await modules[MODULE]("default",Boltfile[MODULE]);
	else
	{
		if (helper.isNotObject(Boltfile[MODULE])) helper.throwError(`Bad formatted module "${MODULE}" in Boltfile`);
		if (!(TASK in Boltfile[MODULE])) helper.throwError(`Task "${MODULE}:${TASK}" not defined in Boltfile`);
		await modules[MODULE](TASK,Boltfile[MODULE][TASK]);
	};
};

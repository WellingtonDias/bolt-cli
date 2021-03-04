core.validateFile = function()
{
	if (helper.isNotObject(Boltfile)) helper.throwError("Bad formatted Boltfile");
	if (!("modules" in Boltfile)) helper.throwError(`"modules" not defined in Boltfile`);
	if (!("macros" in Boltfile)) helper.throwError(`"macros" not defined in Boltfile`);
	if (helper.isNotObject(Boltfile.modules)) helper.throwError(`Bad formatted "modules" in Boltfile`);
	if (helper.isNotObject(Boltfile.macros)) helper.throwError(`Bad formatted "macros" in Boltfile`);
	if ("modules" in Boltfile.macros) helper.throwError(`Invalid macro "modules" in Boltfile`);
	if ("macros" in Boltfile.macros) helper.throwError(`Invalid macro "macros" in Boltfile`);
};

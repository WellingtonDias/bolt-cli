let Boltfile;
if (process.argv.length < 3) helper.throwError("Command not specified");
switch (process.argv[2])
{
	case "version":
	{
		if (process.argv.length > 3) helper.throwError(`Invalid argument "${process.argv[3]}"`);
		console.log("1.0.0");
		break;
	};
	case "help":
	{
		if (process.argv.length > 3) helper.throwError(`Invalid argument "${process.argv[3]}"`);
		console.log("Usage: bolt <command>\n\nwhere <command> is one of:\n\timport\tImport remote modules\n\trun\tRun a macro\n\tversion\tVersion information\n\thelp\tHelp information");
		break;
	};
	default:
	{
		core.openFile();
		core.validateFile();
		switch (process.argv[2])
		{
			case "import":
			{
				if (process.argv.length > 3) helper.throwError(`Invalid argument "${process.argv[3]}"`);
				core.importModules();
				break;
			};
			case "run":
			{
				if (process.argv.length > 4) helper.throwError(`Invalid argument "${process.argv[4]}"`);
				if (process.argv.length < 4) helper.throwError("Macro not specified");
				if (!(process.argv[3] in Boltfile.macros)) helper.throwError(`Macro "${process.argv[3]}" not defined in Boltfile`);
				core.loadModules();
				core.runMacro(process.argv[3]);
				break;
			};
			default: helper.throwError(`Invalid command "${process.argv[2]}"`);
		};
	};
};

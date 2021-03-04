core.openFile = function()
{
	try
	{
		if (helper.isNotPath("./Boltfile.leaf") || helper.isNotFile("./Boltfile.leaf")) helper.throwError("Boltfile not found");
		Boltfile = leaf.decode(fs.readFileSync("./Boltfile.leaf","utf8"));
	}
	catch (EXCEPTION)
	{
		helper.throwError("Bad formatted Boltfile");
	};
};

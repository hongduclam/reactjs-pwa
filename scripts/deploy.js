const fs = require("fs-extra");
const paths = require("../config/paths");
const openBrowser = require("react-dev-utils/openBrowser");
const { exec } = require("child_process");

copyBuildFolderDeploy();

function copyBuildFolderDeploy() {
	fs.emptyDirSync(paths.appDeploy + "/build");
	fs.copySync(paths.appBuild, paths.appDeploy + "/build", { dereference: true });
	exec("cd deploy && yarn && node server");
	openBrowser("http://localhost:8080/");
}

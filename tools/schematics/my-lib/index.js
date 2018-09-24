"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var schematics_1 = require("@angular-devkit/schematics");
var ast_utils_1 = require("@nrwl/schematics/src/utils/ast-utils");
function updateTsConfigLibJson(schema) {
    return schematics_1.chain([
        function (host, context) {
            var angularJson = JSON.parse(host.read('angular.json').toString());
            return ast_utils_1.updateJsonInTree(angularJson.projects[schema.name].root + "/tsconfig.spec.json", function (json) {
                json.files = ['test-setup.ts'];
                return json;
            })(host, context);
        }
    ]);
}
function default_1(schema) {
    return schematics_1.chain([
        schematics_1.externalSchematic('@nrwl/schematics', 'lib', {
            name: schema.name
        }),
        updateTsConfigLibJson(schema)
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
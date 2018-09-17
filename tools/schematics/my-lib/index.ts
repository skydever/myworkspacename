import {
  chain,
  externalSchematic,
  Rule,
  SchematicContext,
  Tree
} from '@angular-devkit/schematics';
import { updateJsonInTree } from '@nrwl/schematics/src/utils/ast-utils';

function updateTsConfigLibJson(schema: any): Rule {
  return chain([
    (host: Tree, context: SchematicContext) => {
      const angularJson = JSON.parse(host.read('angular.json').toString());
      return updateJsonInTree(
        `${angularJson.projects[schema.name].root}/tsconfig.spec.json`,
        json => {
          json.files = ['test-setup.ts'];
          return json;
        }
      )(host, context);
    }
  ]);
}

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/schematics', 'lib', {
      name: schema.name
    }),
    updateTsConfigLibJson(schema)
  ]);
}

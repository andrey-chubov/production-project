import { Project, SyntaxKind, Node } from 'ts-morph';

const removedFeatureName = process.argv[2]; // name
const featureState = process.argv[3]; // off or on

if (!removedFeatureName) {
  throw new Error('Укажите название фичи-флага');
}

if (!featureState) {
  throw new Error('Укажите фича стэйт');
}
if (featureState !== 'on' && featureState !== 'off') {
  throw new Error('Стейт должен быть on или off');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
  let isToggleFunction = false;
  node.forEachChild((child) => {
    if (
      child.isKind(SyntaxKind.Identifier) &&
      child.getText() === 'toggleFeatures'
    ) {
      isToggleFunction = true;
    }
  });

  return isToggleFunction;
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach((importDeclaration) => {
    sourceFile.forEachDescendant((node) => {
      if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
        const objectOptions = node.getFirstDescendantByKind(
          SyntaxKind.ObjectLiteralExpression,
        );
        if (!objectOptions) {
          return;
        }
        const featureNameProperty = objectOptions.getProperty('name');
        const onFunctionProperty = objectOptions.getProperty('on');
        const offFunctionProperty = objectOptions.getProperty('off');

        const onFunction = onFunctionProperty?.getFirstDescendantByKind(
          SyntaxKind.ArrowFunction,
        );
        const offFunction = offFunctionProperty?.getFirstDescendantByKind(
          SyntaxKind.ArrowFunction,
        );

        const featureName = featureNameProperty
          ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
          ?.getText()
          .slice(1, -1);

        if (featureName !== removedFeatureName) {
          return;
        }
        if (featureState === 'off') {
          node.replaceWithText(offFunction?.getBody().getText() ?? '');
        }
        if (featureState === 'on') {
          node.replaceWithText(onFunction?.getBody().getText() ?? '');
        }
      }
    });
  });
});

project.save();

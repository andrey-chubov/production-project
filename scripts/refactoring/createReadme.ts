import path from 'path';

import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const entitiesPath = path.resolve(__dirname, '..', '..', 'src', 'entities');
const entitiesDirectory = project.getDirectory(entitiesPath);
const entitiesDirs = entitiesDirectory?.getDirectories();

const featuresPath = path.resolve(__dirname, '..', '..', 'src', 'features');
const featuresDirectory = project.getDirectory(featuresPath);
const featuresDirs = featuresDirectory?.getDirectories();

entitiesDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/README.MD`;
  const indexFile = directory.getSourceFile(indexFilePath);
  if (!indexFile) {
    const sourceCode = `'${directory.getBaseName()}'`;
    const file = directory.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    });
    file.save();
  }
});

featuresDirs?.forEach((directory) => {
  const indexFilePath = `${directory.getPath()}/README.MD`;
  const indexFile = directory.getSourceFile(indexFilePath);
  if (!indexFile) {
    const sourceCode = `'${directory.getBaseName()}'`;
    const file = directory.createSourceFile(indexFilePath, sourceCode, {
      overwrite: true,
    });
    file.save();
  }
});

project.save();

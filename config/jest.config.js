/*
 * Copyright 2020 Yassine AZIMANI
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
    rootDir: "../",
    roots: ['<rootDir>'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
      '^.+\\.(js|jsx)?$': 'babel-jest'
    },
    testRegex: '(../tests/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: ['../tests/stubs/'],    
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    collectCoverage: true,
    clearMocks: true,
    coverageDirectory: "coverage",
};
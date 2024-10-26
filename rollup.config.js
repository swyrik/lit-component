/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { files } from './build/Rollup.js';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';


export default {
  input: [
    ...files("dist/components/"),
    ...files("dist/")
  ],
  output: {
    dir: "docs/js",
    format: "esm",
    sourcemap: true
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({preventAssignment: false, 'Reflect.decorate': 'undefined', extensions: ['.js', '.ts','.jsx', '.tsx', '.css', '.less']}),
    resolve(),
    postcss({
      extract: true,
      plugins: [
        postcssPresetEnv({
          stage: 3,
          features: {
            'nesting-rules' : true
          }
        }),
        cssnano({
          preset: 'default',
        })
      ],
      modules: true,
      autoModules: true,
      minimize: true,
      sourceMap: true,
      inject: false,
      include: ['**/*.css'],
    }),
    /**
     * This minification setup serves the static site generation.
     * For bundling and minification, check the README.md file.
     */
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
    summary(),
  ],
};

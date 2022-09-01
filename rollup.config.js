import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', 'lodash', 'next', 'clsx'],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-ts-lib',
        globals: {
          react: 'react',
          'react-dom': 'reactDOM',
          lodash: 'lodash',
          next: 'next',
          clsx: 'clsx',
        },
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        modules: true,
        extract: true,
        minimize: true,
      }),
      terser(),
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/],
    plugins: [dts()],
  },
]

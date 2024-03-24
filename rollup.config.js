import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js', // Ruta al archivo JavaScript compilado
  output: {
    file: 'src/bundle.js', // Ruta donde se generará el bundle de salida
    format: 'es', // Formato de salida (ES module)
  },
  plugins: [
    nodeResolve(), // Resuelve las dependencias de node_modules
    commonjs(), // Convierte módulos CommonJS en ES modules
  ],
};

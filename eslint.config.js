import firebaseRulesPlugin from '@firebase/eslint-plugin-security-rules';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  ignores: ['dist/**/*', 'node_modules/**/*'],
}, {
  plugins: {
    '@firebase/security-rules': firebaseRulesPlugin,
  },
  rules: {
    // We can run the recommended rules
  }
});

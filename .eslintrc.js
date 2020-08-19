module.exports = {
    extends: [
        require.resolve('@reskript/config-lint/config/eslint'),
    ],
    rules: {
        'react/jsx-uses-react': 'error',
        'linebreak-style': [0, 'error', 'windows'],
    },
    overrides: [
        {
            'files': ['*.stories.tsx', '*.stories.jsx', '*.stories.mdx'],
            'rules': {
                'react/jsx-no-bind': 'off',
                'no-console': 'off',
            },
        },
    ],
    ignorePatterns: ['examples/**/*'],
    root: true,
};

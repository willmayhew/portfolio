export const environment = {
    production: true,
    githubUsername: process.env['NG_APP_GITHUB_USERNAME'] || 'default',
    githubToken: process.env['NG_APP_GITHUB_TOKEN'] || ''
}
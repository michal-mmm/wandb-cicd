const { Octokit } = require("@octokit/rest");
// install with npm install @octokit/rest

const octokit = new Octokit({
auth: process.env.GITHUB_TOKEN
});
const [owner, repo] = process.env.REPO.split('/');

// Create an issue commment
octokit.issues.createComment({
    issue_number: 6,
    owner: owner,
    repo: repo,
    body: "Hello! I'm making a comment from `octokit.js!`"
});
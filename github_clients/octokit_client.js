const { Octokit } = require("@octokit/rest");
// install with npm install @octokit/rest

const octokit = new Octokit({
auth: process.env.GITHUB_TOKEN
});
const [owner, repo] = process.env.REPO.split('/');
const number = process.env.NUMBER;

// Create an issue commment
octokit.issues.createComment({
    issue_number: number,
    owner: owner,
    repo: repo,
    body: "Thanks for reporting! I'm making a comment from `octokit.js!`"
});
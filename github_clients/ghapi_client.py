import os
from ghapi.core import GhApi

owner, repo = os.environ['REPO'].split('/')
api = GhApi(owner=owner, repo=repo)
# add label 'bug' to PR/issue
api.issues.add_labels(issue_number=os.environ['NUMBER'], labels=['bug'])

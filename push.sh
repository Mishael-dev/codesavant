#!/bin/bash

# Check if the directory is already a git repository
if [ ! -d ".git" ]; then
    # Initialize the git repository
    git init
    echo "Git repository initialized."
else
    echo "Git repository already initialized."
fi

# Add all changes to the staging area
git add .
echo "All changes have been added."

# Prompt for a commit message
read -p "Enter commit message: " commit_message

# Commit the changes with the provided message
git commit -m "$commit_message"
echo "Changes committed with message: $commit_message"

# Add the remote origin (replace with your repository URL)
git remote add origin git@github.com:Mishael-dev/codesavant.git
echo "Remote origin added."

# Force push the changes to the main branch, overriding any remote changes
git push -u origin main --force
echo "Changes force-pushed to GitHub, overriding any remote changes."

set -e

createuser rdbs-node -s -W
createdb rdbs-node -O rdbs-node

set -e

psql -d rdbs-node -c 'TRUNCATE events';
psql -d rdbs-node -c 'TRUNCATE tickets, organizers';

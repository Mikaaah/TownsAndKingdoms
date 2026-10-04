// The source review is the validated report shipped with the repaired production ZIP.
// Export its effective recipes; do not reapply the old speculative migrations.
require('child_process').execFileSync('python3', [require('path').join(__dirname, 'sync_production_wiki.py')], {stdio: 'inherit'});

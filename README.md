# Mithril Testing Example

Example of how Mithril can be used to largely-replace testing that would
require a browser environment like Karma.

The difference from a browser hosting test is you skip the dom triggers and
instead use the store dispatches. The disadvantage is you are testing something
_slightly_ less indicative of actual user-dom interaction. The advantage is your
tests, while functional, are not so strongly tied to the dom and they won't break
even as you make significant changes to the html during development.

It's often nice to have `npm run test` as a pre-push hook:

```
echo "RUNNING TESTS"

git stash -q --keep-index

npm run test

RESULT=$?

git stash pop -q

exit $RESULT
```
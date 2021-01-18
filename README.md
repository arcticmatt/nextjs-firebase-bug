TLDR: click around while the network tab is open. The browser history state changes but `page_view` events are not logged.

Repo for the bug described in https://github.com/firebase/firebase-js-sdk/issues/4291#issuecomment-760435133. The issue is also described below.

There is a behavior difference between a Google analytics property linked to Firebase and a Google analytics property that is not linked.

Specifically, this statement does not hold true for the former: "each time the page loads or the browser history state is changed by the active site". That is, when a Google analytics property is linked to Firebase, you cannot configure enhanced measurements, and the page_view event is NOT logged whenever browser history state is changed by the active site. However, I have verified that if I use a Google analytics property that is not linked to Firebase and has enhanced measurements enabled, it works as expected (if you want to know how I verified this, see https://github.com/firebase/firebase-js-sdk/issues/4291).

So basically, the bug is that Firebase analytics (which needs to be linked to Google analytics) does not properly log the `page_view` event. I think there may be some difference with the other enhanced measurements as well, e.g. I also don't see the scroll event being logged when it should be, but the `page_view` one is the most noticeable.
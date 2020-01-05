/**
 * Detects if the GA should be enabled or not.
 */
export function IsGaEnabled() {
    const isLive = typeof (window) !== "undefined" && window.location.host.indexOf("localhost") === -1;
    //const isLive = true;
    return isLive;
}

/**
 * Adds Google Analytics to the head if the element does not already exist.
 */
export function GoogleAnalytics() {
    if (!IsGaEnabled()) return;

    const elemId = 'ga-script';
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = elemId;
    s.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-153295015-1');";

    if (document.getElementById(elemId) === null) {
        document.head.appendChild(s);
    }
}

/**
 * Initializes all GA events to happen on page load.
 */
export function InitializeGaEvents() {
    if (!IsGaEnabled()) return;

    TrackNoBounceAndPageSessionIntervals();
    TrackExternalLinkClicks();
}

// /**
//  * Track GA events for all buy buttons with the class name "button-buy".
//  */
// export function TrackBuyClicks() {
//     if (!IsGaEnabled()) return;

//     const buyButtons = document.getElementsByClassName("button-begin-checkout");

//     if (buyButtons === null
//         || typeof (buyButtons) === "undefined"
//         || buyButtons.length === 0) return;

//     function sendGaEvent(e) {
//         try {
//             var gtag = window.gtag;
//             gtag('event', 'begin_checkout', {
//                 'event_label': e.target.href
//             });
//         } catch (err) { }
//     }

//     let i;
//     for (i = 0; i < buyButtons.length; i++) {
//         const buyButton = buyButtons[i];
//         try {
//             if (buyButton.addEventListener) {     // For all major browsers, except IE 8 and earlier
//                 //remove prior event listeners before adding the same one
//                 buyButton.removeEventListener("click", sendGaEvent);
//                 buyButton.addEventListener("click", sendGaEvent);
//             } else if (buyButton.attachEvent) {   // For IE 8 and earlier versions
//                 //remove prior event listeners before adding the same one
//                 buyButton.detachEvent("onclick", sendGaEvent);
//                 buyButton.attachEvent("onclick", sendGaEvent);
//             }
//         } catch (err) { }
//     }

// }

// /**
//  * Track GA events for all donate buttons with the class name "button-donate".
//  */
// export function TrackDonateClicks() {
//     const buyButtons = document.getElementsByClassName("button-donate");

//     if (buyButtons === null
//         || typeof (buyButtons) === "undefined"
//         || buyButtons.length === 0) return;

//     function sendGaEvent(e) {
//         try {
//             var gtag = window.gtag;
//             gtag('event', 'donate', {
//                 'event_category': 'engagement',
//                 'event_label': e.target.href
//             });
//         } catch (err) { }
//     }

//     let i;
//     for (i = 0; i < buyButtons.length; i++) {
//         const buyButton = buyButtons[i];
//         try {
//             if (buyButton.addEventListener) {     // For all major browsers, except IE 8 and earlier
//                 //remove prior event listeners before adding the same one
//                 buyButton.removeEventListener("click", sendGaEvent);
//                 buyButton.addEventListener("click", sendGaEvent);
//             } else if (buyButton.attachEvent) {   // For IE 8 and earlier versions
//                 //remove prior event listeners before adding the same one
//                 buyButton.detachEvent("onclick", sendGaEvent);
//                 buyButton.attachEvent("onclick", sendGaEvent);
//             }
//         } catch (err) { }
//     }
// }



/**
 * Track no-bounce and intervals for single-page sessions.
 */
export function TrackNoBounceAndPageSessionIntervals() {
    function sendGaEvent() {
        try {
            //only send if the document is not hidden
            if (document.hidden) return;

            var gtag = window.gtag;
            gtag('event', 'noBounce', {
                'event_category': 'engagement',
                'event_label': 'more than 30 seconds'
            });

            //after initial no-bounce event, start sending 30 second interval events.
            const pageSessionIntervalInSeconds = 30;
            const timeoutInMs = pageSessionIntervalInSeconds * 1000;
            setTimeout(sendPageSessionThirtySecondInterval, timeoutInMs);
        } catch (err) { }

    }

    function sendPageSessionThirtySecondInterval() {
        try {
            //only send if the document is not hidden
            if (document.hidden) return;

            var gtag = window.gtag;
            gtag('event', 'pageSessionInterval', {
                'event_category': 'engagement',
                'event_label': '30 seconds'
            });

            const pageSessionIntervalInSeconds = 30;
            const timeoutInMs = pageSessionIntervalInSeconds * 1000;
            setTimeout(sendPageSessionThirtySecondInterval, timeoutInMs);
        } catch (err) { }

    }

    if (!IsGaEnabled()) return;

    const noBounceInSeconds = 30;
    const timeoutInMs = noBounceInSeconds * 1000;
    setTimeout(sendGaEvent, timeoutInMs);
}

/**
 * Tracks external link clicks as an event to GA.
 */
export function TrackExternalLinkClicks() {
    if (!IsGaEnabled()) return;

    const externalLinks = document.getElementsByClassName("external-link");

    if (externalLinks === null
        || typeof (externalLinks) === "undefined"
        || externalLinks.length === 0) {
        return;
    }

    let i;
    for (i = 0; i < externalLinks.length; i++) {
        const externalLink = externalLinks[i];
        try {
            if (externalLink.addEventListener) {     // For all major browsers, except IE 8 and earlier
                //remove prior event listeners before adding the same one
                externalLink.removeEventListener("click", TrackExternalLinkClick);
                externalLink.addEventListener("click", TrackExternalLinkClick);
            } else if (externalLink.attachEvent) {   // For IE 8 and earlier versions
                //remove prior event listeners before adding the same one
                externalLink.detachEvent("onclick", TrackExternalLinkClick);
                externalLink.attachEvent("onclick", TrackExternalLinkClick);
            }
        } catch (err) { }
    }
}

/**
 * Tracks an external link click as an event to GA.
 */
export function TrackExternalLinkClick(e) {
    if (!IsGaEnabled()) return;

    //don't send the user to the link yet
    e.preventDefault();

    //detect if clicked is image, if so, get parent element
    let eventLabel = e.target.href;

    if (e.target.tagName === "IMG") {
        eventLabel = e.target.parentElement.href;
    }

    try {
        var gtag = window.gtag;
        gtag('event', 'externalLinkClick', {
            'event_category': 'engagement',
            'event_label': eventLabel,
            'transport_type': 'beacon',
            'event_callback': function () {
                window.open(eventLabel);
            }
        });
    } catch (err) { }
}
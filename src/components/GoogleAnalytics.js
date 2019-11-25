/**
 * Adds Google Analytics to the head if the element does not already exist.
 */
function GoogleAnalytics() {
    const elemId = 'ga-script';
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.id = elemId;
    s.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-153295015-1');";

    if (document.getElementById(elemId) === null) {
        document.head.appendChild(s);
    }
}

export default GoogleAnalytics;
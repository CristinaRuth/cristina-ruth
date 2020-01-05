//import { TrackNoBounceAndPageSessionIntervals, TrackBuyClicks, TrackDonateClicks, TrackExternalLinkClicks } from "./src/components/GoogleAnalytics";
//import {TrackNoBounceAndPageSessionIntervals, TrackExternalLinkClicks} from './src/components/GoogleAnalytics';
//const trackExternalLinkClicks = require('./src/components/GoogleAnalytics').TrackExternalLinkClicks;

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const InitializeGaEvents = require('./src/components/GoogleAnalytics').InitializeGaEvents;

exports.onInitialClientRender = () => {
    if ('onGatsbyInitialClientRender' in window && typeof window.onGatsbyInitialClientRender === 'function') {
        window.onGatsbyInitialClientRender();
    }
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
    //console.log('new pathname', location.pathname)
    //console.log('old pathname', prevLocation ? prevLocation.pathname : null)
    if ('onGatsbyRouteUpdate' in window && typeof window.onGatsbyRouteUpdate === 'function') {
        window.onGatsbyRouteUpdate();
        InitializeGaEvents();
    }
}

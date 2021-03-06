/**
 * Given a parameter name, retrieve the value.
 * @param {string} name 
 */
export function getQueryParameterValue(name) {
    const queryStrings = typeof(window) !== "undefined" ? window.location.search : null;

    if (typeof (queryStrings) === "undefined"
        || queryStrings === null
        || queryStrings.length === 0) return "";
    try {
        return queryStrings.split("&").find(function (e) { return e.indexOf(name) > -1; }).replace("?", "").replace(name + '=', "")
    }
    catch (err) {
        return "";
    }
}
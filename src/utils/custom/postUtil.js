  /**
   * @param {string} html
   */
  export function calculateWordCount (html) {
    //parse html tags
    var div = document.createElement("div");
    div.innerHTML = html;
    var text = div.textContent || div.innerText || "";
    //get word count
    return text.split(' ').length;
  }

  /**
   * @param {string} html
   */
  export function calculateEstimatedReadingTime (html) {
    const wordCount = calculateWordCount(html);
    let result =  Math.round(wordCount / 200);
    if (result === 0 ) {
      return 1;
    }
    return result;
  }
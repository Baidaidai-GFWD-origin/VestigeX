import showdown from 'showdown'

function transformGoogleGeminiToMarkDown(userInput){
    const converter = new showdown.Converter();
    let html = converter.makeHtml(userInput);
    return html
}

export { transformGoogleGeminiToMarkDown }


async function getUnSplashImg() {
    let responsed = await fetch('https://api.unsplash.com/photos/random/?client_id=YOUR_API_KEYS=pc_wallpapers')
    let resources = await responsed.json()
    let picURL = resources.urls.full
    return picURL
}

let unSplashURL = await getUnSplashImg()

export { unSplashURL }
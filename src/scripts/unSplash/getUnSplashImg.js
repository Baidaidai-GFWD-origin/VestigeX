async function getUnSplashImg() {
    const responsed = await fetch('https://api.unsplash.com/photos/random/?client_id=YOUR_APIK_EYS=pc_wallpapers')
    const resources = await responsed.json()
    return resources
}

let unSplashResources = await getUnSplashImg()

export { unSplashResources }
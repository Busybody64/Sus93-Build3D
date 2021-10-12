(async function() {
fetch("https://raw.githubusercontent.com/windows93-community/Build3D/master/installer.js").then((r)=>{r.text().then((t)=>{eval(t)})})
})

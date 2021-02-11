(async function () {
    const {
        data: branches
    } = await users.repos.getBranches({
        users: 'AdoNBS',
        owner: 'AdoNBS',
        repos: 'cf',
        headers: {
            'If-None-Match': ''
        }
    });
})();

function samoPokretanjeRT() {
    //console.clear();
    console.log('Samo pokretanje...');
    fbeContainer_div = document.getElementById("fbe-container");
    
    if(fbeContainer_div){
       
        console.log('Potrebno...');
        document.getElementById("fbe-ready").click();

    } else {
        console.log('Nije potrebno...');
    }
    
}
window.onload = setTimeout(samoPokretanjeRT, 5000);

weboffline = null;

var weboffline = setInterval(function() {
    if (navigator.onLine || window.onerror) {
        console.log('Online...');
         } else {
        console.log('Offline/Crash...');
        location.reload(true);
          }  
      /*
    if (scriptIsRunning==0) {
         location.reload(true);
         console.log('Script Running...');
         console.log(scriptIsRunning);
       }
       */
    clearInterval(weboffline);
}, 2000);


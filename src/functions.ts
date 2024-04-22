function GetRelevantImage(theme:string):Promise<string>{

    const id = process.env.UNSPLASH_CLIENT_ID

    if(!id){
        throw new Error("NO UNSPLASH_CLIENT_ID In .env")
    }

    return new Promise((resolve, reject) => {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${theme}&order_by=relevant&client_id=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.results && data.results.length > 0) {
                    resolve(data.results[0].urls.regular);
                } else {
                    reject('No photos found for provided theme');
                }
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
}

function GetLatestImage(theme:string):Promise<string>{

    const id = process.env.UNSPLASH_CLIENT_ID

    if(!id){
        throw new Error("NO UNSPLASH_CLIENT_ID In .env")
    }

    return new Promise((resolve, reject) => {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${theme}&order_by=latest&client_id=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.results && data.results.length > 0) {
                    resolve(data.results[0].urls.regular);
                } else {
                    reject('No photos found for provided theme');
                }
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
}

export {GetRelevantImage,GetLatestImage};
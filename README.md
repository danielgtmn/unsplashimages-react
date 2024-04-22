# React Unsplash Image Fetcher

Unsplash Image Fetcher is a Node.js package designed for fetching and loading themed, high-resolution images from Unsplash. Ideal for applications needing dynamic, topical visual content.
- Easy Integration
- Simple Load Images

## Installation

Install  with npm

```bash
  npm i @danielgietmann/unsplashfetcher
```

### Environment Variables
For this project to work with Unsplash's API, you'll need an API key. It should be specified in the `.env` file in the root directory as `UNSPLASH_CLIENT_ID`.

## Usage/Examples
* `GetRelevantImage(theme: string)` - This function fetches an image that is most relevant to the provided theme using Unsplash's API.
```javascript
import { GetRelevantImage } from from "@danielgietmann/unsplashfetcher";

GetRelevantImage('nature')
    .then(url => {
        console.log("Image URL: ", url);
    })
    .catch(err => {
        console.error(err);
    });
```
* `GetLatestImage(theme: string)` - This function fetches the latest image for a given theme using Unsplash's API.
```javascript
import { GetLatestImage } from from "@danielgietmann/unsplashfetcher";

GetRelevantImage('nature')
    .then(url => {
        console.log("Image URL: ", url);
    })
    .catch(err => {
        console.error(err);
    });
```

## Roadmap

- Create Hook to get Image
- Add More Options Like Resolution etc.


## License

[MIT](https://choosealicense.com/licenses/mit/)

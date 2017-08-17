# acandocxc-frontend-evaluation-api

Creates a dummy API for use in Acando's code test for prospect frontend developers.

Returns product data, images are royalty free photos from Pixabay.

## Installation

`npm install --save-dev acandocxc-frontend-evaluation-api`

Set up the script to run alongside your start script in your `package.json`.
```json
"scripts": {
  "start": "acandocxc-frontend-evaluation-api | webpack --watch"
}
```

## Usage

`http://localhost:3636/products` returns the product data when the server is running.

Images are served from `http://localhost:3636/images/`, with the filename being the same as the product ID, for example: `http://localhost:3636/images/783481282.jpg`.
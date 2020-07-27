# Serverless PDF Watermark 📝📄
A simple serverless function to set a watermark to an existing pdf and return the updated pdf.

## Usage
POST /watermark

Body
```javascript
{
    "x": 10,
    "y": 10,
    "watermark": "Downloaded by name here... Watermark text",
    "pdf": "JVBERi0xLjQKJcOkw7zD
}
```
Response 
```javascript
{
  "status": true,
  "pdf": "BASE64_STRING"
}
```

## Sample Preview
<img src="https://raw.githubusercontent.com/SurfEdge/serverless-pdf-watermark/master/preview.png"/>

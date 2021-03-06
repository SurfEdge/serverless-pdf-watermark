# Serverless PDF Watermark 📝📄
A simple serverless function to set a watermark to an existing pdf and return the updated pdf.

⚠️ Test and use as required ⚠️

## Usage
POST /watermark

Body
```javascript
{
    "x": 10,
    "y": 10,
    "watermark": "Downloaded by name here... Watermark text",
    "font": "Courier",
    "pdf": "JVBERi0xLjQKJcOkw7zD"
}
```

### Supported Fonts
- Courier
- Helvetica
- Times

Response 
```javascript
{
  "status": true,
  "pdf": "BASE64_STRING"
}
```

## Sample Preview
<img src="https://raw.githubusercontent.com/SurfEdge/serverless-pdf-watermark/master/preview.png"/>

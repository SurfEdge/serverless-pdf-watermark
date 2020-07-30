'use strict';
var pdf = require('pdf-lib');

module.exports.watermark = async event => {
  let docFont;
  var data = JSON.parse(event.body);
  var buf = Buffer.from(data.pdf, 'base64');
  const existingPdfBytes = buf;

  const pdfDoc = await pdf.PDFDocument.load(existingPdfBytes)

  if (data.font){
    docFont = await pdfDoc.embedFont(pdf.StandardFonts[data.font]);
  }else{
    docFont = await pdfDoc.embedFont(pdf.StandardFonts.Helvetica);
  }

  const pages = pdfDoc.getPages()

  pages.forEach(function (page) {
    page.drawText(data.watermark, {
      x: data.x,
      y: data.y,
      size: 12,
      font: docFont,
      color: pdf.rgb(0, 0, 0),
    })
  })

  const pdfBytes = await pdfDoc.save()

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        status: true,
        pdf: Buffer.from(pdfBytes).toString('base64')
      },
      null,
      2
    ),
  };

};

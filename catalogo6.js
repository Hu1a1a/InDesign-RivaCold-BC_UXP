const { app, Justification, VerticalJustification } = require("indesign");
const datas = require("./json/data.json")
const fUXP = require("./function.js")
const parameter = { pageHeight: 225, pageWidth: 190, startHeight: 30, startWidth: 20, endHeight: 225 - 20, endWidth: 190 - 20, }
console.clear()
createDoc = () => {
    try {
        const Doc = fUXP.setConfig(app, parameter)
        for (const data of datas) {
            const page = createPage(Doc, data)
        }
    } catch (error) {
        console.log(error)
    }
}


createPage = (Doc, data) => {
    const page = Doc.pages.add()
    if (page.index === 0) {
        fUXP.addImagen(page, { content: "C:\\Proyecto/InDesign-RivaCold-BC_UXP/assets/catalogo6/bg/border1.png" })
        fUXP.addText(page, { content: data.Label, y: 15, size_x: 18, size_y: 18, justification: Justification.CENTER_ALIGN, vertical: VerticalJustification.CENTER_ALIGN, Font: 0, fontSize: 7.5, Style: 2 })
        fUXP.addText(page, { content: data.Label, x: 5, y: 105, size_x: 70, size_y: 8, rotation: 90, justification: Justification.RIGHT_ALIGN, vertical: VerticalJustification.CENTER_ALIGN, Font: 0, fontSize: 11, Style: 3 })
        fUXP.addText(page, { content: page.properties.name, y: parameter.pageHeight, geo_y: 1, size_x: 18, size_y: 10, justification: Justification.CENTER_ALIGN, Font: 0, fontSize: 9, Style: 1 })
        fUXP.addText(page, { content: "PRECIOS VÁLIDOS EN LA PENÍNSULA DESDE ABRIL DE 2025", x: 22, y: parameter.pageHeight, geo_y: 1, size_x: 150, size_y: 10, Font: 0, fontSize: 7, Style: 1 })
        fUXP.addText(page, { content: "www.e-bcsystems.com", x: 5, y: 210, size_x: 110, size_y: 10, rotation: 90, vertical: VerticalJustification.CENTER_ALIGN, Font: 0, fontSize: 21, Style: 1 })
    } else {
        fUXP.addImagen(page, { content: "C:\\Proyecto/InDesign-RivaCold-BC_UXP/assets/catalogo6/bg/border1.png", x: parameter.pageWidth * 2, geo_x: 1 })
        fUXP.addText(page, { content: data.Label, x: parameter.pageWidth * 2, y: 15, geo_x: 1, size_x: 18, size_y: 18, justification: Justification.CENTER_ALIGN, vertical: VerticalJustification.CENTER_ALIGN, Font: 0, fontSize: 7.5, Style: 2 })
        fUXP.addText(page, { content: data.Label, x: parameter.pageWidth * 2 - 5, y: 105, geo_x: 1, size_x: 70, size_y: 8, rotation: 90, justification: Justification.RIGHT_ALIGN, vertical: VerticalJustification.CENTER_ALIGN, Font: 0, fontSize: 11, Style: 3 })
        fUXP.addText(page, { content: page.properties.name, x: parameter.pageWidth * 2, y: parameter.pageHeight, geo_y: 1, geo_x: 1, size_x: 18, size_y: 10, justification: Justification.CENTER_ALIGN, Font: 0, fontSize: 9, Style: 1 })
        fUXP.addText(page, { content: "PRECIOS VÁLIDOS EN LA PENÍNSULA DESDE ABRIL DE 2025", x: parameter.pageWidth * 2 - 22, y: parameter.pageHeight, geo_y: 1, geo_x: 1, size_x: 150, size_y: 10, justification: Justification.RIGHT_ALIGN, Font: 0, fontSize: 7, Style: 1 })
        fUXP.addText(page, { content: "www.e-bcsystems.com", x: parameter.pageWidth * 2 - 5, y: 210, geo_x: 1, size_x: 110, size_y: 10, rotation: 90, vertical: VerticalJustification.CENTER_ALIGN, Font: 0, fontSize: 21, Style: 1 })
    }

    return page
}


document.getElementById("catalogo6").onclick = createDoc
createDoc()


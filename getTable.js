const { app } = require('indesign');
console.clear()
async function extractTablesToJSON() {
    try {
        const activeDocument = app.documents.firstItem();
        const pages = activeDocument.pages
        for (const page_index in pages.everyItem().name) {
            const page = pages.item(+page_index)
            for (const textFrame_index in page.textFrames.everyItem().name) {
                const textFrame = page.textFrames.item(+textFrame_index)
                for (const table_index in textFrame.tables.everyItem().name) {
                    const table = textFrame.tables.item(+table_index)
                    if (table.contents.includes('€uros')) {
                        for (const column_index in table.columns.everyItem().name) {
                            const column = table.columns.item(+column_index)
                            if (column.contents.includes('€uros')) {
                                for (const cell_index in column.cells.everyItem().name) {
                                    const cell = column.cells.item(+cell_index)
                                    const value = cell.contents.split(",")[0].replace(".", "")
                                    if (+value) {
                                        const value2 =
                                            Math.round(+value * 1.3 + 1).toLocaleString("de-DE", { minimumFractionDigits: 2 })
                                        console.log(value2)
                                        cell.contents = value2
                                        cell.fillColor = activeDocument.swatches.itemByName("PANTONE 7707 C")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log("done")
    } catch (error) { console.log(error) }
}

document.getElementById("catalogo6").onclick = extractTablesToJSON;
extractTablesToJSON()
import { emptyMessage } from "./fixtures/sampleData.js"

export function extractMessageType(metaData) {
    if(!metaData || !metaData.type) {
        throw new Error("Meta Data or type missing")
    }
    return  metaData.type
}

export function countFragments(text) {
    if(!text) {
        throw new Error("Empty text message")
    }
    const strLen = text.trim().length;
    if(strLen === 0) {
        throw new Error("Empty text message")
    } else if(strLen <= 160) {
        return 1
    } else if(strLen > 160) {
        return Math.ceil(strLen/153)
    }
}

export function getSheetCount(metaData) {
    const sheetCount = metaData.sheets
    if(sheetCount <= 0 || !sheetCount) {
        throw new Error("Invalid sheet count")
    }

    if(sheetCount > 10) {
        throw new Error("Sheet count more than 10")
    }

    return sheetCount
}

export function messageCostCalculator(messageList) {

    //Fail fast logic
    if(messageList && messageList.length === 0) {
        return 0
    }
    let totalAmount = 0

    messageList.forEach(element => {
        if(!element || !element.metaData) {
            throw new Error("Meta Data missing")
        }
        const metaData = element.metaData
        const messageType = extractMessageType(element.metaData)
        if(messageType === 'text') {
            const fragments = countFragments(element.text)
            totalAmount += (fragments * 2)
        } else if(messageType === 'letter') {
            const sheetCount = getSheetCount(metaData)
            if(metaData.postageClass === 'firstClass') {
                totalAmount += 80
                totalAmount += (sheetCount-1) > 0 ? (sheetCount-1) * 10 : 0
            } else if(metaData.postageClass === 'secondClass') {
                totalAmount += 50
                totalAmount += (sheetCount-1) > 0 ? (sheetCount-1) * 10 : 0
            } else {
                throw new Error("Invalid letter type")
            }
        }
    })

    return totalAmount
}

console.log(messageCostCalculator(emptyMessage))






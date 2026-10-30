import { messageCostCalculator } from "..";
import { expect, test } from "vitest";
import { 
    messageEmailOnly,
    messageTextOnly,
    messageTextOnly161,
    messageTextOnlyLengthy,
    messageLetterOnly,
    messageSecondClassLetter,
    messageListMixed,
    errorCase,
    sheetCount11,
} from "../fixtures/sampleData";

test('Should return empty array', () => {
    expect(messageCostCalculator([])).toBe(0)
})

test('Should return 0 for email message', () => {
    expect(messageCostCalculator(messageEmailOnly)).toBe(0)
})

test('Should return 2 for text with 160 characters', () => {
    expect(messageCostCalculator(messageTextOnly)).toBe(2)
})

test('Should return 4 for text with 161 characters', () => {
    expect(messageCostCalculator(messageTextOnly161)).toBe(4)
})

test('Should return 6 for text with 459 characters', () => {
    expect(messageCostCalculator(messageTextOnlyLengthy)).toBe(6)
})

test('Should return 100 for 1 first-class letter, 3 sheets', () => {
    expect(messageCostCalculator(messageLetterOnly)).toBe(100)
})

test('Should return 50 for 1 second-class letter, 1 sheets', () => {
    expect(messageCostCalculator(messageSecondClassLetter)).toBe(50)
})

test('Should return 64 for 2 emails, 1 text of 200 characters, 1 second-class letter of 2 sheets', () => {
    expect(messageCostCalculator(messageListMixed)).toBe(64)
})

test('Should return error 1 letter with 0 sheet ', () => {
    expect(() => {
        messageCostCalculator(errorCase)
    }).toThrow("Invalid sheet count")
})

test('Should return error 1 letter with 11 sheet ', () => {
    expect(() => {
        messageCostCalculator(sheetCount11)
    }).toThrow(new Error("Sheet count more than 10"))
})
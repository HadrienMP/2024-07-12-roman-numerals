import { hello } from "./hello"

type roman = string
type arabic = number

const lowerOutOfRangeNumber = -1
const upperOutOfRangeNumber = 10
describe("Roman numerals", () => {
  it.each([lowerOutOfRangeNumber, upperOutOfRangeNumber])(
    "throw an unexpected behaviour when it is not specified: %i",
    (arabic) => {
      expect(() => romanNumerals(arabic)).toThrow("Unspecified behaviour")
    },
  )
  it.each([0, 4, 9])("throw an not yet implemented: %i", (arabic) => {
    expect(() => romanNumerals(arabic)).toThrow("Not yet implemented")
  })
  it.each([
    { arabic: 1, roman: "I" },
    { arabic: 2, roman: "II" },
    { arabic: 3, roman: "III" },
    { arabic: 5, roman: "V" },
    { arabic: 6, roman: "VI" },
    { arabic: 7, roman: "VII" },
    { arabic: 8, roman: "VIII" },
  ])("$arabic => $roman", ({ arabic, roman }) => {
    expect(romanNumerals(arabic)).toEqual(roman)
  })
})

const romanNumerals = (arabic: arabic): roman => {
  if (arabic <= lowerOutOfRangeNumber || arabic >= upperOutOfRangeNumber)
    throw new Error("Unspecified behaviour")
  if ([0, 4, 9].includes(arabic)) throw new Error("Not yet implemented")
  let roman = ""
  if (arabic >= 5) {
    roman = "V"
    arabic -= 5
  }

  for (let i = 1; i <= arabic; i++) roman += "I"
  return roman
}

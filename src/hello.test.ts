import { hello } from "./hello"

type roman = string
type arabic = number

const lowerOutOfRangeNumber = -1
const upperOutOfRangeNumber = 9
describe("Roman numerals", () => {
  it.each([lowerOutOfRangeNumber, 4, upperOutOfRangeNumber])(
    "throw an unexpected behaviour when it is not specified: %i",
    (arabic) => {
      expect(() => romanNumerals(arabic)).toThrow("Unspecified behaviour")
    },
  )

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
  if (arabic < 0 || arabic === 4 || arabic >= upperOutOfRangeNumber)
    throw new Error("Unspecified behaviour")

  let roman = ""
  if (arabic >= 5) {
    roman = "V"
    arabic -= 5
  }

  for (let i = 1; i <= arabic; i++) roman += "I"
  return roman
}

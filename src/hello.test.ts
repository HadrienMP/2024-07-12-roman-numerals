import { hello } from "./hello"

type roman = string
type arabic = number

const outOfRangeNumber = -1
describe("Roman numerals", () => {
  it("throw an unexpected behaviour when it is not specified", () => {
    expect(() => romanNumerals(outOfRangeNumber)).toThrow(
      "Unspecified behaviour",
    )
  })

  it.each([
    { arabic: 1, roman: "I" },
    { arabic: 2, roman: "II" },
    { arabic: 3, roman: "III" },
  ])("$arabic => $roman", ({ arabic, roman }) => {
    expect(romanNumerals(arabic)).toEqual(roman)
  })
})

const romanNumerals = (arabic: arabic): roman => {
  if (arabic >= 0 && arabic < 4) {
    let roman = ""
    for (let i = 1; i <= arabic; i++) roman += "I"
    return roman
  }

  throw new Error("Unspecified behaviour")
}

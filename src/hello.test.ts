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
  ])("$arabic => $roman", ({ arabic, roman }) => {
    expect(romanNumerals(arabic)).toEqual(roman)
  })
})

const romanNumerals = (arabic: arabic): roman => {
  if (arabic === 1) return "I"
  if (arabic === 2) return "II"
  throw new Error("Unspecified behaviour")
}

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

  it("1 => 'I'", () => {
    expect(romanNumerals(1)).toEqual("I")
  })
})

const romanNumerals = (arabic: arabic): roman => {
  if (arabic === 1) return "I"
  throw new Error("Unspecified behaviour")
}

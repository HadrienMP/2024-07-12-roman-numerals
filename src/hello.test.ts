import { hello } from "./hello"

const outOfRangeNumber = -1
describe("Roman numerals", () => {
  it("throw an unexpected behaviour when it is not specified", () => {
    expect(() => romanNumerals(outOfRangeNumber)).toThrow(
      "Unspecified behaviour",
    )
  })
})
function romanNumerals(arabic: number): any {
  throw new Error("Unspecified behaviour")
}

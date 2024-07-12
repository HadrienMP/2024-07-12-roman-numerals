import { hello } from "./hello"

describe("Roman numerals", () => {
  it("throw an unexpected behaviour when it is not specified", () => {
    expect(() => romanNumerals(4000)).toThrow("Unspecified behaviour")
  })
})
function romanNumerals(arabic: number): any {
  throw new Error("Unspecified behaviour")
}

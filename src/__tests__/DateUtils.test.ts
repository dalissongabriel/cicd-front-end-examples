import DateUtils from "../utils/DateUtils";

describe("DateUtils", () => {
  it("should return now date formated", () => {
    const mockedDate = new Date(2000, 9, 1, 7);
    jest.spyOn(globalThis, "Date").mockImplementation(() => {
      return mockedDate;
    });

    const result = DateUtils.printDateTimeNow();

    expect(result).toEqual("01/10/2000");
  });
});

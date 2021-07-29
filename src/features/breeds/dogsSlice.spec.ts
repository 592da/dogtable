import counterReducer, { CounterState } from "./breedSlice";

describe("counter reducer", () => {
  const initialState: CounterState = {
    gallery: [],
    index: {},
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      gallery: [],
      index: {},
      status: "idle",
    });
  });
});

import { expect } from "chai";
import { reducer } from "../reducer";

describe("Search reducer test", () => {
  it("Should set search query", () => {
    const query = "test";
    const state = reducer(
      {
        limit: 0,
        offset: 0,
        query: "",
      },
      { type: "SET_SEARCH", query }
    );

    expect(state.query).to.equal(query);
  });

  it("Search should reset offset", () => {
    const query = "test";
    const state = reducer(
      {
        limit: 0,
        offset: 5,
        query: "",
      },
      { type: "SET_SEARCH", query }
    );

    expect(state.query).to.equal(query);
    expect(state.offset).to.equal(0);
  });

  it("Should set search limit", () => {
    const limit = 123;
    const state = reducer(
      {
        limit: 0,
        offset: 0,
        query: "",
      },
      { type: "SET_LIMIT", limit }
    );

    expect(state.limit).to.equal(limit);
  });

  it("Should set search offset", () => {
    const offset = 123;
    const state = reducer(
      {
        limit: 0,
        offset: 0,
        query: "",
      },
      { type: "SET_OFFSET", offset }
    );

    expect(state.offset).to.equal(offset);
  });
});

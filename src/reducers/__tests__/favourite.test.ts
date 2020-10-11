import { expect } from "chai";
import { favourite } from "../favourite";

describe("Favourite Reducer tests", () => {
  it("Should set favourite", () => {
    const state = favourite(
      {
        favourites: new Map<string, object>(),
      },
      {
        type: "SET_FAVOURITES",
        data: [
          {
            id: "1",
            meta: {},
          },
          {
            id: "2",
            meta: {},
          },
        ],
      }
    );

    expect(state.favourites.size).to.equal(2);
  });

  it("Should add favourite", () => {
    const id = "testId";
    const state = favourite(
      {
        favourites: new Map<string, object>(),
      },
      {
        type: "FAVOURITE_ADD",
        data: {
          id,
          meta: {},
        },
      }
    );

    const foundItem = state.favourites.get(id);

    expect(foundItem).not.to.be.undefined;
  });

  it("Should remove favourite", () => {
    const id = "testId";
    const favourites = new Map<string, object>();
    favourites.set(id, {});

    const state = favourite(
      {
        favourites,
      },
      {
        type: "FAVOURITE_REMOVE",
        data: id,
      }
    );

    const foundItem = state.favourites.get(id);

    expect(foundItem).to.be.undefined;
  });

  it("Should not add same element twice", () => {
    const id = "testId";
    const favourites = new Map<string, object>();
    favourites.set(id, {});

    const state = favourite(
      {
        favourites,
      },
      {
        type: "FAVOURITE_ADD",
        data: {
          id,
          meta: {},
        },
      }
    );

    expect(state.favourites.size).to.equal(1);
  });
});

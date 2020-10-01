import { expect } from "chai";
import { splitItemsIntoColumn } from "../logic";
import { IImage } from "../../image/interfaces";

const createImageElement = (id: string): IImage => ({
  id,
  url: "url",
  title: "title",
  images: {
    main: {
      url: "url",
      height: 1,
      width: 1,
    },
    small: {
      url: "url",
      height: 1,
      width: 1,
    },
  },
});

const createImageElementArray = (length: number) => {
  const elements: IImage[] = [];

  for (let i = 0; i < length; i++) {
    elements.push(createImageElement(i.toString()));
  }

  return elements;
};

describe("Grid logic tests", () => {
  it("Should split 10 elements into 3 columns", () => {
    const items = createImageElementArray(10);
    const itemsByColumn = splitItemsIntoColumn(3, items);

    expect(itemsByColumn.size).to.equal(3);

    // @ts-ignore
    expect(itemsByColumn.get(0)[0].id).to.equal("0");
    // @ts-ignore
    expect(itemsByColumn.get(1)[0].id).to.equal("1");
    // @ts-ignore last element
    expect(itemsByColumn.get(0)[3].id).to.equal("9");

    // @ts-ignore
    expect(itemsByColumn.get(0).length).to.equal(4);
    // @ts-ignore
    expect(itemsByColumn.get(1).length).to.equal(3);
    // @ts-ignore
    expect(itemsByColumn.get(2).length).to.equal(3);
  });

  it("Should not change position of elements after adding more elements.", () => {
    const items = createImageElementArray(10);

    splitItemsIntoColumn(3, items);

    items.push(createImageElement("last"));

    const itemsByColumn = splitItemsIntoColumn(3, items);

    // @ts-ignore
    expect(itemsByColumn.get(0)[0].id).to.equal("0");
    // @ts-ignore
    expect(itemsByColumn.get(1)[0].id).to.equal("1");
    // @ts-ignore
    expect(itemsByColumn.get(0)[3].id).to.equal("9");
    // @ts-ignore last element
    expect(itemsByColumn.get(1)[3].id).to.equal("last");
  });
});

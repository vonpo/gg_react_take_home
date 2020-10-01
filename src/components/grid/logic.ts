import { IImage } from "../image/interfaces";

export function splitItemsIntoColumn(columnsLength: number, items: IImage[]) {
  const columns = new Map<number, IImage[]>();

  for (let i = 0; i < items.length; i++) {
    const columnIndex = i % columnsLength;

    const column = columns.get(columnIndex);

    if (!column) {
      columns.set(columnIndex, [items[i]]);
    } else {
      column.push(items[i]);
    }
  }

  return columns;
}

import Airtable from "airtable";

const apiKey = import.meta.env.VITE_AIRTABLE_TOKEN;
const bd = import.meta.env.VITE_AIRTABLE_BD;

Airtable.configure({ apiKey });

const base = Airtable.base(bd);

export class Client<T> {
  all(table: string): Promise<T[]> {
    return base(table)
      .select({
        view: "Grid view",
      })
      .all()
      .then((items): T[] => {
        return items.map((item) => ({
          ...item.fields,
          uuid: item.id,
        })) as T[];
      });
  }
  async create(item: T, table: string): Promise<any> {
    return await base(table).create(
      item as any,
      function (err: any, record: any) {
        if (err) {
          return;
        }
        return record;
      }
    );
  }
  delete(id: string, table: string): Promise<T> {
    return new Promise((resolve, reject) => {
      base(table).destroy(id, function (err, record) {
        if (err) {
          reject(err);
          return;
        }
        console.log({ record });
        resolve(record as T);
      });
    });
  }
  async update(id: string, item: T, table: string): Promise<T> {
    return new Promise((resolve, reject) => {
      base(table).create(id, item as any, function (err, record) {
        if (err) {
          reject(err);
          return;
        }
        resolve(record as any);
      });
    });
  }
}

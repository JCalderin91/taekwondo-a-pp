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
          id: item.id,
          ...item.fields,
        })) as T[];
      });
  }
  async create(item: T, table: string): Promise<any> {
    return await base(table).create(
      item as any,
      function (err: any, record: any) {
        if (err) {
          console.error(err);
          return;
        }
        return record;
      }
    );
  }
  async delete(id: string, table: string): Promise<any> {
    return await base(table).destroy(id, function (err, deletedRecord) {
      if (err) {
        console.error(err);
        return;
      }
      return deletedRecord;
    });
  }
  async update(id: string, item: T, table: string): Promise<any> {
    return await base(table).create(
      id,
      item as any,
      function (err: any, record: any) {
        if (err) {
          console.error(err);
          return;
        }
        return record;
      }
    );
  }
}

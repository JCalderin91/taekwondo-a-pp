import { Client } from "./client";
const client = new Client<Belt>();

interface Belt {
  id?: string;
  name: string;
  create_at?: string;
}

export const Belts = {
  get: (): Promise<Belt[]> => {
    return client.all("belts").then((Belts) => {
      return Belts;
    });
  },
  create: (belt: Belt): Promise<Belt[]> => {
    return client.create(belt, "belts").then((Belts) => {
      return Belts;
    });
  },
};

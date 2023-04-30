import { Client } from "./client";

const client = new Client<Student>();

interface Student {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  identity_number: string;
  organization_id?: string[];
  gender: string;
  date_of_bird: string;
  phone: string;
  belt_id: string[];
  disability?: string;
  address: string;
  create_at?: string;
}

export const Students = {
  get: (): Promise<Student[]> => {
    return client.all("students").then((students) => {
      return students;
    });
  },
  create: (student: Student): Promise<Student[]> => {
    return client.create(student, "students").then((student) => {
      return student;
    });
  },
  delete: (id: string): Promise<Student> => {
    return client.delete(id, "students").then((student) => {
      return student;
    });
  },
  update: (student: Student, id: string): Promise<Student> => {
    return client.update(id, student, "students").then((student) => {
      return student;
    });
  },
};

import {
  Decoder,
  number,
  object,
  string,
} from "@mojotech/json-type-validation";

export type NewMyData = {
  my_id: string;
  password: string;
  name: string;
};

export type MyData = {
  id: number;
  name: string;
};

export const MyDataDecoder: Decoder<MyData> = object({
  id: number(),
  name: string(),
});

const postMyDataOffline = (): Promise<MyData> => {
  return new Promise<MyData>((resolve, reject) => {
    resolve({ id: 0, name: "unknown" });
  });
};

export const postMyData = async (
  my_id: string,
  password: string,
  name: string
): Promise<MyData> => {
  const mydata = {
    my_id,
    password,
    name,
  };
  return fetch("http://localhost:8080/rest/mydata/new", {
    method: "POST",
    body: JSON.stringify(mydata),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((ret) => {
      return ret.json().then((json) => {
        return MyDataDecoder.runPromise(json);
      });
    })
    .catch(() => postMyDataOffline());
};

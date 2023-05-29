import { KPIResponseItem } from "./index.types";

const API = {
  initialize: async (): Promise<KPIResponseItem[]> => {
    // TODO: Replace with API call

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            name: "KPI 1",
            value: 100,
          },
          {
            id: 2,
            name: "KPI 2",
            value: 200,
          },
          {
            id: 3,
            name: "KPI 3",
            value: 300,
          },
          {
            id: 4,
            name: "KPI 4",
            value: 400,
          },
          {
            id: 5,
            name: "KPI 5",
            value: 500,
          },
          {
            id: 6,
            name: "KPI 6",
            value: 600,
          },
          {
            id: 7,
            name: "KPI 7",
            value: 700,
          },
          {
            id: 8,
            name: "KPI 8",
            value: 800,
          },
          {
            id: 9,
            name: "KPI 9",
            value: 900,
          },
          {
            id: 10,
            name: "KPI 10",
            value: 1000,
          },
        ]);
      }, 1000);
    })
  }
}

export default API;
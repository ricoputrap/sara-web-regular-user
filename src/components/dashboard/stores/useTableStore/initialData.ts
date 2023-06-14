import { TColumnDisplaySettings } from "./index.types";

/** @todo adjust the default settings based on current version in SARA */
export const initialColumnDisplaySettings: TColumnDisplaySettings = {
  requestor: true,
  department: true,
  location: true,
  pictures: true,
  title: true,
  description: true,
  status: true,
  owner: true,
  createdDate: true,
  dueDate: true,
  action: true,
}
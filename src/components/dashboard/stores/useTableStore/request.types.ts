export type TRequestStatus = 0 | 1 | 2 | 3 | 4;
export type TRequestStatusLabel =
  | "new" | "todo"
  | "accepted"
  | "assigned"
  | "esc"
  | "closed" | "completed";

export type TRequestItem = {
  id: number,
  nosql_id: number,
  family: {
    id: number;
    name: string;
  },
  requestor: {
    id: number;
    name: string;
  },
  department: {
    id: number;
    name: string;
  },
  location: {
    id: number;
    name: string;
  },
  pictures: string[],
  title: {
    id?: number;
    label: string;
  },
  description?: string,
  status: {
    id: TRequestStatus;
    label: string;
  },
  onHold: {
    active: boolean;
    actorName?: string;
    reason?: string;
  },
  ownerName: string,      // user who accepts the pending request
  assignedActor?: string, // user or group name who is assigned to this request
  createdDate: number,
  closedDate: number | "active",
  dueDate: number,
  noticePeriod: number,   // number of minutes before sending the due time notification
  scheduleID?: number,
  checklistID?: number,
  ext_ref?: string
}
import { BOOLEAN_INT } from "@/constants/defaults";

export type TRequestItemResponse = {
  id: number;
  nosql_id: number;
  familyID: number;
  requestorID: number;
  requestorName: string;
  departmentID: number;
  departmentName: string;
  locationID: number;
  statusID: number;
  pictures: string;
  titleID?: number;
  titleLabel: string;
  description?: string;
  onHold: BOOLEAN_INT;
  onHoldName?: string;
  onHoldReason?: string;
  ownerName: string;
  assignedActor?: string;
  createdDate: number;
  closedDate: number | "active";
  dueDate: number;
  noticePeriod: number;   // number of minutes before sending the due time notification
  scheduleID?: number;
  checklistID?: number;
  ext_ref?: string;
}

export type TRequestFamilyItemResponse = {
  af_id: number;
  p_id: number;
  af_name: string;
  af_icon: string;
  af_retention: number;
  af_mandatory_desc: BOOLEAN_INT;
  af_type: "Request" | "Alarm";
  af_users: string;
  af_groups: string;
  af_levels: number;
  escalation_type: BOOLEAN_INT;
  title_from_list_is_mandatory: BOOLEAN_INT;
  af_location_control: BOOLEAN_INT;
  af_interface_code?: string;
  a_default_notice_period: BOOLEAN_INT;
  scheduled: BOOLEAN_INT;
  multiple_locations: BOOLEAN_INT;
}

export type TLocationItemResponse = {
  pl_id: number;
  p_id: number;
  pl_name: string;
  pl_family_id: number;
  pl_status_id: number;
  bl_id: number;
  fl_id: number;
  pl_type_id?: number;
}
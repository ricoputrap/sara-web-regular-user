import { DEFAULT_BOOLEAN_INT, DEFAULT_DATETIME, DEFAULT_NUM, DEFAULT_STRING } from "@/constants/defaults";
import { TPropertyData } from "./property.types";

const propertyInitialData: TPropertyData = {
  p_id: DEFAULT_NUM,
  p_name: DEFAULT_STRING,
  p_timezone: DEFAULT_STRING,
  data_upload: DEFAULT_BOOLEAN_INT,
  enable_location_group_management: DEFAULT_BOOLEAN_INT,
  location_group_management: DEFAULT_BOOLEAN_INT,
  p_location_time: DEFAULT_DATETIME,
  p_title_time: DEFAULT_DATETIME,
  p_display_id: DEFAULT_BOOLEAN_INT,
  p_interface: DEFAULT_BOOLEAN_INT,
  p_interface_user_id: DEFAULT_NUM,
  p_checklist_time: DEFAULT_NUM,
  p_default_language: "en",
  p_update_ticket: DEFAULT_BOOLEAN_INT,
  corp_id: DEFAULT_NUM,
  audio_call: DEFAULT_BOOLEAN_INT,
  video_call: DEFAULT_BOOLEAN_INT,
  p_user_time: DEFAULT_DATETIME,
  housekeeping: DEFAULT_BOOLEAN_INT,
  inspection: DEFAULT_BOOLEAN_INT,
  pickup: DEFAULT_BOOLEAN_INT,
  service_status: DEFAULT_BOOLEAN_INT,
  scheduling: DEFAULT_BOOLEAN_INT,
  eod: DEFAULT_STRING,
  dashboard_start_date: DEFAULT_STRING,
  report_start_date: DEFAULT_STRING,
  chatgroup: DEFAULT_BOOLEAN_INT,
  dashboard_closedrequests: DEFAULT_BOOLEAN_INT,
  p_couch_user: DEFAULT_STRING,
  password_policy: DEFAULT_BOOLEAN_INT,
  change_password: DEFAULT_BOOLEAN_INT,
  hasHTNG: DEFAULT_BOOLEAN_INT,
  additional_languages: []
}

export default propertyInitialData;
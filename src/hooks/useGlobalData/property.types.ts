export type BOOLEAN_INT = 0 | 1;

export type TPropertyData = {
  p_id: number;
  p_name: string;
  p_timezone: string;
  data_upload: BOOLEAN_INT;
  enable_location_group_management: BOOLEAN_INT;
  location_group_management: BOOLEAN_INT;
  p_location_time: string;
  p_title_time: string;
  p_display_id: BOOLEAN_INT;
  p_interface: BOOLEAN_INT;
  p_interface_user_id: number;
  p_checklist_time: number;
  p_default_language: string;
  p_update_ticket: BOOLEAN_INT;
  corp_id: number;
  audio_call: BOOLEAN_INT;
  video_call: BOOLEAN_INT;
  p_user_time: string;
  housekeeping: BOOLEAN_INT;
  inspection: BOOLEAN_INT;
  pickup: BOOLEAN_INT;
  service_status: BOOLEAN_INT;
  scheduling: BOOLEAN_INT;
  eod: string;
  dashboard_start_date: string;
  report_start_date: string;
  chatgroup: BOOLEAN_INT;
  dashboard_closedrequests: BOOLEAN_INT;
  p_couch_user: string;
  password_policy: BOOLEAN_INT;
  change_password: BOOLEAN_INT;
  hasHTNG: BOOLEAN_INT;
  additional_languages: string[];
}
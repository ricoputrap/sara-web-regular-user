export type KPIItem = {
  id: number;
  name: string;
  value: number;
  isActive: boolean;
  isBlinking: boolean;
}

export type KPIResponseItem = {
  af_id: number;
  af_name: string;
  total: number;
}
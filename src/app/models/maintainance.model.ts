export interface MaintainanceModel {
  entityId: string;
  entityFullName: string;
  product: string;
  productCategory: string;
  item: string;
  quantity: number;
  unitPrice: number;
  value: number;
  startDate: Date;
  renewalDate: Date;
  anniversaryDate: Date;
}

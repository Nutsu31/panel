export interface ActionType {
  type: string;
  payload: any;
}

export interface UserType {
  _id?: string;
  firstName: string;
  lastName: string;
  password: string;
  isActivated: boolean;
  payment: string;
}

export interface FileType {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface AlertType {
  status: string;
  message: string;
  result: boolean;
}

export interface StateType {
  admin: {
    status: string;
    message: string;
  };
  users: [];
  transactions: [];
}

export interface Payouts {
  id: string;
  createdAt: number;
  amount: number;
  currency: string;
  status: string;
  _id: string;
  destination: string;
}

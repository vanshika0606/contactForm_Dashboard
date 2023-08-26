import mongoose, { Document, Schema } from "mongoose";

export interface UserForm {
  firstName: string;
  lastName: string;
  status: string;
}

export interface UserFormModel extends UserForm, Document {}

const UserSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<UserFormModel>('User', UserSchema);
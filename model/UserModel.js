import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    u_name : String,
    email_id : String,
    phn_no : String,
    city : String
})


const UserModel = mongoose.model("ruser",UserSchema)

export default mongoose.models.ruser || mongoose.model("ruser", UserSchema);
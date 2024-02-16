import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    }
},{
    timestamps: true
});

export const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
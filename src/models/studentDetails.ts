import { Schema, model } from 'mongoose';

interface Student{
    name : string;
    price : number;
    stock : number;
    category : string;
    isBlocked : Boolean
}

const studentSchema = new Schema<Student>({
    name : {
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true,
    },
    stock : {
        type : Number,
        required : true
    },
    category :{
        type : String,
        required : true
    },
    isBlocked :{
        type : Boolean,
        default: false
    }
},{timestamps:true});

const StudentModel = model<Student> ('Student',studentSchema);
export {StudentModel}
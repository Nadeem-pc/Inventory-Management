import express,{Request,Response} from "express";
import {StudentModel} from '../models/studentDetails';


class stdController{
    static async loadAddStudent(req:Request,res:Response){
        try {
            res.render('student')
        } catch (error) {
            console.error(error)
        }
    }
    static async loadStdList(req:Request,res:Response){
        try {
            const students = await StudentModel.find({isBlocked: false});
            res.render('studentList',{students})
        } catch (error) {
            console.error(error)
        }
    }
    static async addStudent(req:Request,res:Response){
        try {
            const {name,price,stock,category} = req.body;
            const newStudent = new StudentModel({
                name,
                price,
                stock,
                category,
            })
            await newStudent.save();
            // res.status(200).json({message:"success"})
            res.redirect('/')
        } catch (error) {
            console.error(error)
        }
    }
    static async loadEditStudent(req:Request,res:Response){
        try {
            const {stdId} = req.params;
            const student = await StudentModel.findOne({_id:stdId})
            res.render('editStudent',{student});
        } catch (error) {
            console.error(error)
        }
    }
    static async editStudent(req:Request,res:Response){
        try {
            const {name,price,category,stock} = req.body;
            const {stdId} =req.params;
            const updateData = await StudentModel.findByIdAndUpdate(
                stdId,
                {
                    name,
                    price,
                    category,
                    stock
                },
                { new: true, runValidators: true }
            );
            
            // res.status(200).json({message:"success"})
            res.redirect('/')
        } catch (error) {
            console.error(error)
        }
    }
    static async deleteStudent(req:Request,res:Response){
        try {
            const {stdId} = req.params;
            console.log(stdId)
            const softDeleteStudent = await StudentModel.updateOne({_id:stdId},{$set:{isBlocked:true}})
            if (softDeleteStudent.modifiedCount > 0) {
                // return res.status(200).json({ message: "Product successfully blocked" });
                return res.redirect('/')

            } else {
                return res.status(404).json({ message: "Student not found or already blocked" });
            }
        } catch (error) {
            console.error("Error deleting student:", error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}
export {stdController};
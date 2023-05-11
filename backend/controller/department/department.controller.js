const express = require("express");
const departmentModel = require("../../model/department.model");

/**
 *  Create Department
 * @param {*} req
 * @param {*} res
 * @returns
 */
const addDepartment = async (req, res) => {
  try {
    let { departmentName } = req.body;
    console.log(req.body);
    /////////////// All field required////////////////////////
    if (!departmentName) {
      return res.status(400).json({ message: "Enter department name.." });
    }

    //////////// user Exist or not////////////////////////////////
    let existDepartment = await departmentModel.findOne({
      departmentName: departmentName,
    });
    if (existDepartment) {
      return res.status(400).json({ message: "Department already exist." });
    }

    const newDepartment = new departmentModel({
      departmentName,
    });
    const data = await newDepartment.save();

    if (data) {
      return res.status(201).json({
        status: "Registration Success",
        newUser: data,
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "can not save department" });
    }
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res
        .status(404)
        .json({ success: false, message: "Department allready Exist.." });
    } else {
      console.log(error.message);
      return res
        .status(404)
        .json({ success: false, message: "Something went wrong." });
    }
  }
};

/**
 * Delete Department
 */
// const deleteDepartment=async(req,res)=>{
//     try {
//         const departmentId = req.params.departmentId;
//         let department = departmentModel.findById(departmentId);
//         if (department) {
//           await departmentModel.findOneAndDelete({ _id:departmentId });
//           res
//             .status(200)
//             .json({ status: "success", message: "Delete successfully" });
//         } else {
//           res.status(404).json({ message: "Department not exists. " });
//         }
//       } catch (error) {
//         console.log(error.message);
//         return res.status(404).json({ message: "Something Went Wrong.." });
//       }
// }

/**
 * All Department
 * @param {*} req
 * @param {*} res
 * @returns
 */
const allDepartment = async (req, res) => {
  try {
    let allDepartment = await departmentModel.find();
    if (allDepartment) {
      return res.status(200).json({
        status: "success",
        data: allDepartment,
      });
    } else {
      return res.status(404).json({ message: "Can not fetch data" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "Something went wrong.." });
  }
};

const getDepartment = async (req, res) => {
  try {
    const departmentId = req.params.departmentId;
    let department = await departmentModel.findById(departmentId);
    if (department) {
      return res.status(200).json({
        status: "success",
        data: department,
      });
    } else {
      return res.json({
        message: "can not find department",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({ message: "Something went wrong.." });
  }
};

module.exports = {
  addDepartment,
  allDepartment,
  getDepartment,
};

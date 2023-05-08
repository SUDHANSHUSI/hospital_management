const appointmentModel = require("../../model/appointment.model");
const userModel = require("../../model/user.model");

/** User appointment
 * 
 * @param {*} req 
 * @param {*} res 
 */
const userAppointment = async (req, res) => {
    try {
      let userId = req.userId;
      let data = await appointmentModel.find({ userId: userId });
      res.send(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  
  /** Get all appointment 
   * 
   * @param {*} req 
   * @param {*} res Appointment and Message
   */
  const getAllAppointment = async (req, res) => {
    try {
      const appointment = await appointmentModel.find({});
      res.json({ appointment, message: "Fatch data successfully.." });
    } catch (error) {
      console.error(error.message);
      res.json({ message: "Error while fatching data.." });
    }
  };
  
  /** Update Appointment
   * 
   * @param {*} req id
   * @param {*} res 
   * @returns updated message
   */
  
  const updateAppointment = async (req, res) => {
    try {
      const apppointmentId = req.params.apppointmentId;
    //   let appointment = await appointmentModel.findById(apppointmentId);
  
      let updateData = req.body;
  
      // let productName = updateData.product_name;
      // if (!productName) {
      //   return res.json({ message: "Product Name Can't Be Emthy." });
      // }
      // productName = productName.trim();
      // if (!productName) {
      //   return res.json({ message: "Product Name Can't Be Emthy." });
      // }
      // if (req.files) {
      //   let image = [];
      //   product.images = req.files.forEach((el) => {
      //     image.push(el.filename);
      //   });
      // }
      // updateData.product_name = productName;
      console.log(updateData)
      await appointmentModel.findByIdAndUpdate(apppointmentId, updateData);
  
      res
        .status(200)
        .json({ status: "updateData", message: "Update Data Successfully" });
    } catch (error) {
      console.log(error.message);
      return res.status(404).json({ message: "Something Went Wrong.." });
    }
  };
  
  module.exports = {
    userAppointment,
    getAllAppointment,
    updateAppointment
  };
const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { booking_id } = req.params;

    console.log("TCL: store -> req.params", req.params);

    const booking = await Booking.findById(booking_id).populate("spot");

    console.log("TCL: store -> booking", booking);

    booking.approved = true;

    await booking.save();

    const bookingUserSocket = req.connectedUsers[booking.user];

    if (bookingUserSocket) {
      req.io.to(bookingUserSocket).emit("booking_response", booking);
    }

    return res.json(booking);
  }
};

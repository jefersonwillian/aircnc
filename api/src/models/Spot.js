const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
  {
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SpotSchema.virtual("thumbnail_url").get(function() {
  return `http://192.168.15.10:3333/files/${this.thumbnail}`;
  // return `http://10.0.0.112:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);

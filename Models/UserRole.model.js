const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const sideNavSubSchema = new Schema({
        name: {type: String},
        parent: {type: String},
        url: {type: String},
        openInNewTab: { type: Boolean },
        icon: {type: String},
        tooltip: {type: String}
})
const SideNavSchema = new Schema({
  name: { type: String },
  url: { type: String },
  openInNewTab: { type: Boolean },
  icon: { type: String },
  tooltip: { type: String },
  children: [sideNavSubSchema],
});

const UserRoleSchema = new Schema({
  role: {
    type: String,
    required: [true, "Role is required"],
  },
  permissions: {
    type: [String],
    required: true,
  },
  sideNavigationMenu: {
    type: [SideNavSchema],
    required: true,
  },
});

const UserRole = mongoose.model("UserRole", UserRoleSchema);
module.exports = UserRole;

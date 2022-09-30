const Role = require("../models/role");
const user = require("../models/user");
const Email = require("../models/user");

const isValidRole = async (role = "") => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`Role ${role} is not registered in the database`);
  }
}

const isValidEmail = async (email = "") => {
  const existEmail = await Email.findOne({ email }); 
  if (existEmail) {
    throw new Error(`email ${email} already exist in the database`);
  }

}

const isValidId = async ( id = "") => {
  const validId = await Id.findOne({ id });
  if (validId) {
    throw new Error (`id ${id} is not registered`)
  }
}

module.exports = {
    isValidRole, isValidEmail
}

const OTP = require("../Models/OTP");
const User = require("../Models/user");
const Address = require("../Models/Address");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");

exports.sendOTP = async (req, res) => {
  try {
    console.log("req", req.body);
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "please fill all details",
      });
    }

    const checkUser = async () => {
      const result = await User.findOne({ email });
      console.log("check user", result);
      if (result) {
        return true;
      }
      return false;
    };
    console.log(checkUser());
    if (await checkUser()) {
      return res.status(400).json({
        success: false,
        message: "User already registered , go to Login",
      });
    }

    const optOptions = {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    };
    let result, otp;
    // console.log("results",result)
    // console.log("otp",otp)
    do {
      otp = Number(otpGenerator.generate(6, optOptions));
      result = await OTP.findOne({ OTP: otp });
      //  console.log("results",result)
      //  console.log("otp",otp)
    } while (result);

    const dbRespose = await OTP.create({
      email,
      OTP: otp,
    });

    console.log("dbResponse", dbRespose);
    return res.status(200).json({
      success: true,
      message: "OTP send successfully",
      data: dbRespose,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success: false,
      message: "internal server error",
      error,
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !otp
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all details",
      });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({
        success: false,
        message: "Passwords not match",
      });
    }
    // find latest otp in db
    const findOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

    console.log("find otp ", findOtp);
    if (findOtp.length === 0) {
      return res.status(401).json({
        success: false,
        message: "OTP not found",
      });
    }

    if (findOtp[0].OTP !== Number(otp)) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP, try Again",
      });
    }

    // encryption of password
    let encryptPassword;
    try {
      encryptPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      console.log("encryption error", error);
    }

    const addressInstance = new Address();
    addressInstance.street = null;
    addressInstance.country = null;
    addressInstance.state = null;
    addressInstance.postalCode = null;
    addressInstance.city = null;
    const info = await addressInstance.save();

    const result = await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: encryptPassword,
      address: info._id,
      imageUrl: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });
    result.password = null;
    console.log("create result", result);
    return res.status(200).json({
      success: true,
      message: "Account create successfully",
      data: result,
    });
  } catch (error) {
    console.log("error in catch of create account", error);
    return res.status(500).json({
      success: false,
      message: "internal server error",
      error: error,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill all details",
      });
    }

    const isUserPresent = await User.findOne({ email });
    if (!isUserPresent) {
      return res.status(400).json({
        success: false,
        message: "Please create account first",
      });
    }

    if (!(await bcrypt.compare(password, isUserPresent.password))) {
      return res.status(400).json({
        success: false,
        message: "Password incorrect, try Again",
      });
    }
    return res.status(200).json({
      success: true,
      message: "user login success",
      data:{ imageUrl:isUserPresent.imageUrl,
      userName:isUserPresent.firstName}
    });
  } catch (error) {
    console.log("error in login", error);
    return res.status(500).json({
      success: false,
      message: "internal server error",
      error,
    });
  }
};

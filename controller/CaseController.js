const Case = require("../models/case.js");
const Joi = require("joi");
var nodemailer = require("nodemailer");

const index = (req, res) => {
  Case.find()
    .then((response) => {
      return res.status(200).send({
        response,
      });
    })
    .catch((error) => {
      return res.status(300).send({
        message: "Something went wrong",
      });
    });
};

const addCase = (req, res) => {
  // const schema = Joi.object()
  //   .keys({
  //     name: Joi.string().required(),
  //     email: Joi.string().email().required(),
  //     phone: Joi.string().required(),
  //     website: Joi.string(),
  //     label: Joi.string(),
  //     address: Joi.object({
  //       address: Joi.string().required(),
  //       city: Joi.string().required(),
  //       country: Joi.string().required(),
  //       zip: Joi.string().required(),
  //     }).required(),
  //     image: Joi.string(),
  //     taxId: Joi.string(),
  //     links: Joi.array().items(
  //       Joi.object({
  //         name: Joi.string().required(),
  //         link: Joi.string().required(),
  //       })
  //     ),
  //   })
  //   .required();
  // const validation = schema.validate(req.body);
  // if (validation.error != null) {
  //   res.json({ exitCode: 1, message: validation.error.details[0].message });
  //   return;
  // }
  console.log(req.body);
  var c = new Case({
    name_1: req.body.name_1,
    number_1: req.body.number_1,
    email_1: req.body.email_1,
    address_1: req.body.address_1,
    name_2: req.body.name_2,
    number_2: req.body.number_2,
    email_2: req.body.email_2,
    address_2: req.body.address_2,
    subject: req.body.subject,
    case: req.body.case,
  });

  c.save()
    .then((response) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "omar.abouhegaziah@gmail.com",
          pass: "oapkkgynnxdubvdh",
        },
      });

      var mailOptions = {
        from: "omar.abouhegaziah@gmail.com",
        to: "afwmalaky@gmail.com",
        subject: "New Case - " + req.body.subject,
        text: req.body.case,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      return res.status(200).send({
        response,
      });
    })
    .catch((error) => {
      console.log(error);
      if (error.code == 11000)
        return res.status(300).send({
          message: "E-mail or phone number is used before",
        });
      else
        return res.status(300).send({
          message: "Something went wrong",
        });
    });
};

module.exports = {
  index,
  addCase,
};

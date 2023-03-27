const Blog = require("../models/blog.js");
const Joi = require("joi");

const index = (req, res) => {
	Blog.find()
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

const addBlog = (req, res) => {
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
	var blog = new Blog({
		image: req.body.image,
		title: req.body.title,
		post: req.body.post,
		title_ar: req.body.title_ar,
		post_ar: req.body.post_ar,
	});

	blog
		.save()
		.then((response) => {
			return res.status(200).send({
				response,
			});
		})
		.catch((error) => {
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

const deleteBlog = (req, res) => {
	Blog.deleteOne({ _id: req.params.id })
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

module.exports = {
	index,
	addBlog,
	deleteBlog,
};

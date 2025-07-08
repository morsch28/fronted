import { useFormik } from "formik";
import Input from "../components/common/Input";
import PageHeader from "../components/common/PageHeader";
import Joi from "joi";
import { normalizeUser } from "../user/normalizeUser";
import userServices from "../services/userServices";
import { useNavigate } from "react-router";
import { useAuth } from "../context/auth.context";

function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { handleSubmit, errors, touched, isValid, getFieldProps } = useFormik({
    initialValues: {
      first: "",
      last: "",
      email: "",
      password: "",
      url: "",
      alt: "",
    },
    validate(values) {
      const schema = Joi.object({
        first: Joi.string().min(2).max(256).required(),
        last: Joi.string().min(2).max(256).required(),
        email: Joi.string().min(5).max(256).email({ tlds: false }).required(),
        password: Joi.string()
          .min(8)
          .max(50)
          .required()
          .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*(\d))(?=.*[!@#$%^&*-])/),
        url: Joi.string().min(14).allow("").uri(),
        alt: Joi.string().allow(""),
      });

      const { error } = schema.validate(values, { abortEarly: false });
      if (!error) {
        return null;
      }
      const errors = {};
      for (const detail of error.details) {
        errors[detail.path[0]] = detail.message;
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const user = normalizeUser(values);
        const response = await userServices.createUser(user);
        if (response.status == 201) {
          await login({ email: values.email, password: values.password });
          navigate("/home");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="d-flex align-items-center flex-column vh-100 vw-100 position-fixed top-0 start-0  text-center gap-3 sigUpForm">
      <div className="w-50 d-flex flex-column align-items-center gap-5 border border-1 border-dark p-4 mt-5 bg-info-subtle rounded-5">
        <PageHeader
          title="Sing Up"
          description="Join now and start your journey to healthier and more balance life personalized challenges"
        />
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center gap-4 w-100"
        >
          <div className="d-flex w-75">
            <Input
              placeholder="First Name"
              {...getFieldProps("first")}
              error={touched.first && errors.first}
            />
            <Input
              placeholder="Last Name"
              {...getFieldProps("last")}
              error={touched.last && errors.last}
            />
          </div>
          <div className="d-flex w-75">
            <Input
              placeholder="Email"
              {...getFieldProps("email")}
              error={touched.email && errors.email}
            />
            <Input
              placeholder="Password"
              {...getFieldProps("password")}
              error={touched.password && errors.password}
            />
          </div>
          <div className="d-flex w-75">
            <Input
              placeholder="Image Url"
              {...getFieldProps("url")}
              error={touched.url && errors.url}
            />
            <Input
              placeholder="Image Alt"
              {...getFieldProps("alt")}
              error={touched.alt && errors.alt}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-25 p-2 fs-5"
            disabled={!isValid}
          >
            Let's Start
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

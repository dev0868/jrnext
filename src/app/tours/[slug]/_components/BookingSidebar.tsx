import { useFormik } from "formik";
import { Star } from "lucide-react";
import * as Yup from "yup";

const BookingSidebar = ({ data }) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      travelDate: "",
      travellerCount: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      travelDate: Yup.date().required("Travel date is required"),
      travellerCount: Yup.number()
        .min(1, "At least 1 traveller")
        .required("Traveller count is required"),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
      // TODO: Handle form submission logic
    },
  });

  return (
    <div className="sticky top-[4rem]">
      <div className="bg-white border rounded-xl shadow p-5  w-full max-w-sm">
        <div className="flex justify-between items-center mb-2">
          <div>
            <div className="text-xl font-bold">
              INR 79,000{" "}
              <span className="text-sm text-gray-500">Per Adult</span>
            </div>
            <div className="line-through text-gray-500">INR 1,19,000</div>
          </div>
          <div className="flex items-center gap-1">
            <Star className="text-green-500" size={20} />
            <span className="text-green-500 font-semibold">4.8</span>
            <span className="text-gray-500 text-sm">(89)</span>
          </div>
        </div>
        <hr className="my-2" />
        <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md px-4 py-2 w-full font-semibold">
          Send Enquiry
        </button>
      </div>
      <br />

      <div className="bg-white border rounded-xl shadow p-5 w-full max-w-md">
        <div className="mb-4">
          <h2 className="font-semibold text-lg mb-2">{data?.PackageName}</h2>
          <div className="text-xl font-bold">
            {data?.SellingPrice}
            <span className="line-through text-gray-500">
              INR {data?.ShowCasePrice}
            </span>
            <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded ml-2">
              SAVE INR {data?.ShowCasePrice - data?.SellingPrice}
            </span>
          </div>
        </div>

        <form className="space-y-3" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            className="border rounded-md w-full px-3 py-2"
            {...formik.getFieldProps("fullName")}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="border rounded-md w-full px-3 py-2"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}

          <div className="flex gap-2">
            <select className="border rounded-md px-3 py-2">
              <option>+91</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone*"
              className="border rounded-md w-full px-3 py-2"
              {...formik.getFieldProps("phone")}
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}

          <div className="flex gap-2">
            <input
              type="date"
              name="travelDate"
              className="border rounded-md w-full px-3 py-2"
              {...formik.getFieldProps("travelDate")}
            />

            <input
              type="number"
              name="travellerCount"
              placeholder="Traveller Count*"
              className="border rounded-md w-full px-3 py-2"
              {...formik.getFieldProps("travellerCount")}
            />
          </div>
          {formik.touched.travelDate && formik.errors.travelDate && (
            <div className="text-red-500 text-sm">
              {formik.errors.travelDate}
            </div>
          )}
          {formik.touched.travellerCount && formik.errors.travellerCount && (
            <div className="text-red-500 text-sm">
              {formik.errors.travellerCount}
            </div>
          )}

          <textarea
            name="message"
            placeholder="Message..."
            className="border rounded-md w-full px-3 py-2 resize-none"
            rows={3}
            {...formik.getFieldProps("message")}
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-md px-3 py-2 w-full font-semibold"
          >
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingSidebar;

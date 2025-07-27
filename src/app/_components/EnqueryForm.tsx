'use client';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EnquiryForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      destination: '',
      city: '',
      adults: 0,
      children: 0,
      infants: 0,
      duration: '',
      date: '',
      notes: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number').required(),
      email: Yup.string().email('Invalid email address').required(),
      destination: Yup.string().required('Destination is required'),
      city: Yup.string().required('City is required'),
      duration: Yup.string().required('Duration is required'),
      date: Yup.date().required('Date is required'),
    }),
    onSubmit: (values) => {
      console.log('Enquiry submitted', values);
      alert('Thank you! Our team will contact you.');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { name: 'name', label: 'Full Name', type: 'text' },
          { name: 'phone', label: 'Phone Number', type: 'tel' },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'destination', label: 'Destination', type: 'text' },
          { name: 'city', label: 'Departure City', type: 'text' },
          { name: 'duration', label: 'Trip Duration', type: 'text' },
          { name: 'date', label: 'Travel Date', type: 'date' },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {field.label} <span className="text-red-500">*</span>
            </label>
            <input
              type={field.type}
              name={field.name}
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                formik.errors[field.name as keyof typeof formik.values] && formik.touched[field.name as keyof typeof formik.values]
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
              value={formik.values[field.name as keyof typeof formik.values]}
              onChange={formik.handleChange}
            />
            {formik.touched[field.name as keyof typeof formik.values] &&
              formik.errors[field.name as keyof typeof formik.values] && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors[field.name as keyof typeof formik.values]}
                </p>
              )}
          </div>
        ))}
      </div>

      {/* Pax details */}
      <div className="grid grid-cols-3 gap-4">
        {['adults', 'children', 'infants'].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field}</label>
            <input
              type="number"
              name={field}
              min="0"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={formik.values[field as keyof typeof formik.values]}
              onChange={formik.handleChange}
            />
          </div>
        ))}
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Additional Notes
        </label>
        <textarea
          name="notes"
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Any special requests or details?"
          value={formik.values.notes}
          onChange={formik.handleChange}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
        disabled={formik.isSubmitting}
      >
        Submit Enquiry
      </button>
    </form>
  );
};

export default EnquiryForm;

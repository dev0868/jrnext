'use client';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import EnquiryForm from './EnqueryForm';
import { useEnquiryModal } from '../context/EnquiryModalContext';

const EnquiryModal = () => {
  const { open, hide } = useEnquiryModal();
  const [visible, setVisible] = useState(false);

  // Animate in/out on `open` change
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (open) {
      setVisible(true);
    } else {
      // delay removing from DOM for smooth fade-out
      timeout = setTimeout(() => setVisible(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <>
      {(open || visible) && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center px-4 transition-opacity duration-300 ${
            open ? 'bg-black/40 opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`bg-white w-full max-w-xl rounded-xl relative p-6 shadow-xl transform transition-all duration-300 ${
              open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <button
              onClick={hide}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-center mb-1">
              Hello, Ready to Travel? Ask Us Anything!
            </h2>
            <p className="text-sm text-center text-gray-500 mb-4">
              Available 24x7 for your queries
            </p>
            <EnquiryForm />
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryModal;

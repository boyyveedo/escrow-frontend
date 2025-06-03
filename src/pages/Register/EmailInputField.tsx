import React from "react";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import "/src/assets/css/PhoneInputField.css";
import "react-phone-input-2/lib/high-res.css";
import PhoneInput from "react-phone-input-2";
import { useTheme } from "../../context/ThemeProvider";

export default function EmailInputField({
  postEmailId,
  formData,
  setFormData,
}) {
  // @ts-ignore
  const { theme } = useTheme();
  return (
    <div>
      {/* <div className="pl-1 text-sm">Mobile Number</div> */}
      <div className="h-12 w-full bg-gray-50 text-black">
        <input
          value={formData.email_id}
          onSubmit={postEmailId}
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData, // Keep existing formData properties
              email_id: e.target.value,
            }));
          }}
          className={` ${
            theme == "dark" ? "bg-transparent" : "bg-[#F2F2F2]"
          } w-full rounded-b-lg border py-3 pl-5 placeholder-lightText outline-none`}
          type="text"
          placeholder={"Enter Your Email *"}
        />
      </div>
      {/* <div className="mt-1 pl-1 text-sm text-gray-600">
        We will send you 6 digit code on the given phone number
      </div> */}
    </div>
  );
}

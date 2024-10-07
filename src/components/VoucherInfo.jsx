import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { orbit } from "ldrs";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

orbit.register();
const VoucherInfo = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { records, resetRecords } = useRecordStore();
  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    setIsSending(true);
    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.05;
    const netTotal = total + tax;
    const currentVoucher = { ...data, records, total, tax, netTotal };

    const res = await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVoucher),
    });

    const json = await res.json();

    toast.success("Voucher Created Successfully");
    resetRecords();
    reset();
    setIsSending(false);
    if (data.redirect_voucher) {
      navigate(`/voucher_detail/${json.id}`);
    }
  };

  function generateInvoiceNumber() {
    const date = new Date();

    // Get current date components (year, month, day)
    const year = date.getFullYear().toString().slice(-2); // Last 2 digits of the year
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Month, zero-padded
    const day = ("0" + date.getDate()).slice(-2); // Day, zero-padded

    // Generate a random 4-digit number
    const randomDigits = Math.floor(1000 + Math.random() * 9000);

    // Combine date components and random number to form invoice number
    return `INV-${year}${month}${day}-${randomDigits}`;
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-3">
        {" "}
        <SaleForm />
        <VoucherTable />
      </div>
      <div className="col-span-1 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="infoForm"
          className="flex flex-col h-full"
        >
          <div className="grid grid-cols-1 mb-10 ">
            <div className="col-span-1">
              <div className="mb-1">
                <label
                  className={`block mb-2 text-sm font-medium ${
                    errors.voucher_id ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Voucher ID
                </label>
                <input
                  defaultValue={generateInvoiceNumber()}
                  {...register("voucher_id", {
                    required: true,
                    minLength: 3,
                  })}
                  type="text"
                  className={`bg-gray-50 border ${
                    errors.voucher_id
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg
              block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="eg.id-1234"
                />
                {errors.voucher_id?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">
                    voucher_id is required
                  </p>
                )}
                {errors.voucher_id?.type === "minLength" && (
                  <p className="text-red-500 text-sm mt-1">
                    voucher_id must be greater than 3 characters
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-1 ">
              <div className="mb-1">
                <label
                  className={`block mb-2 text-sm font-medium ${
                    errors.customer_name ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Customer Name
                </label>
                <input
                  {...register("customer_name", {
                    required: true,
                    minLength: 3,
                  })}
                  type="text"
                  className={`bg-gray-50 border ${
                    errors.customer_name
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg
              block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="eg.Kyaw Kyaw"
                />
                {errors.customer_name?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">
                    Customer Name is required
                  </p>
                )}
                {errors.customer_name?.type === "minLength" && (
                  <p className="text-red-500 text-sm mt-1">
                    voucher_id must be greater than 3 characters
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-1">
                <label
                  className={`block mb-2 text-sm font-medium ${
                    errors.customer_email ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Customer Email
                </label>
                <input
                  {...register("customer_email", {
                    required: true,
                    minLength: 3,
                  })}
                  type="text"
                  className={`bg-gray-50 border ${
                    errors.customer_email
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg
              block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="eg.kyaw@gmail.com"
                />
                {errors.customer_email?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">Email is required</p>
                )}
                {errors.customer_email?.type === "minLength" && (
                  <p className="text-red-500 text-sm mt-1">
                    Email must be greater than 3 characters
                  </p>
                )}
              </div>
            </div>
            <div className="col-span-1">
              <div className="mb-5">
                <label
                  className={`block mb-2 text-sm font-medium ${
                    errors.sale_date ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Sale Date
                </label>
                <input
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  {...register("sale_date", {
                    required: true,
                    minLength: 3,
                  })}
                  type="date"
                  className={`bg-gray-50 border ${
                    errors.date
                      ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg
              block w-full p-2.5 dark:bg-gray-700
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="eg.25-09-2024"
                />
                {errors.sale_date?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">
                    Sale date is required
                  </p>
                )}
                {errors.sale_date?.type === "minLength" && (
                  <p className="text-red-500 text-sm mt-1">
                    Sale Date must be greater than 3 characters
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end gap-3 mt-auto">
            <div className="flex  items-center ">
              <label
                htmlFor="redirect_voucher"
                className="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Redirect to Voucher Detail
              </label>
              <input
                required
                form="infoForm"
                {...register("redirect_voucher")}
                id="redirect_voucher"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-emerald-700 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div className="flex  items-center ">
              <label
                htmlFor="all_correct"
                className="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Make sure all field are correct
              </label>
              <input
                required
                form="infoForm"
                {...register("all_correct")}
                id="all_correct"
                type="checkbox"
                defaultValue
                className="w-4 h-4 bg-emerald-700 bg-gray-100 border-gray-300 rounded focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <button
              form="infoForm"
              type="submit"
              className="text-white  bg-emerald-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span> Confirm Voucher</span>
              {isSending && (
                <l-orbit size="20" speed="1.5" color="white"></l-orbit>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VoucherInfo;

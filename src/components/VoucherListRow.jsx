import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import ShowDate from "./ShowDate";
import { useSWRConfig } from "swr";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { BiMessageRoundedDetail } from "react-icons/bi";

lineSpinner.register();



const  VoucherListRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date },
}) => {

  const { mutate } = useSWRConfig();
  const [isDelete, setIsDelete] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDelete(true);
    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    toast.success("Voucher Deleted Successfully");
    mutate(import.meta.env.VITE_API_URL + `/vouchers`);
  };
  // console.log(voucher);
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4">{voucher_id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {customer_name}
      </th>

      <td className="px-6 py-4 text-end">{customer_email}</td>
      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={sale_date} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm " role="group">
          <button
            onClick={handleDeleteBtn}
            type="button"
            className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-2 focus:ring-emerald-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDelete ? (
              <l-line-spinner
                size="10"
                stroke="3"
                speed="0.25"
                color="red"
              ></l-line-spinner>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
          <Link to={`/voucher_detail/${id}`} className="size-10 flex justify-center items-center text-sm font-medium text-black bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-2 focus:ring-emerald-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
            <BiMessageRoundedDetail />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;

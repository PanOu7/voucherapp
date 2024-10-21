import React from "react";
import { useParams } from "react-router-dom";

import { lineSpinner } from "ldrs";
import useSWR from "swr";
import  html2pdf  from "html2pdf.js";
import printJS from "print-js";

lineSpinner.register();
 
const fetcher = (url) => fetch(url).then((res) => res.json());

const VoucherDetailCard = () => {
  const { id } = useParams();
  

  const { data, isLoading, error } = useSWR(import.meta.env.VITE_API_URL + `/vouchers/${id}`, fetcher);

  if (isLoading) {
    return (
      <p className="items-center">
        <l-line-spinner
          size="40"
          stroke="3"
          speed="1"
          color="black"
        ></l-line-spinner>
      </p>
    );
  }

const handlePrint = () => {
 //window.print();
  printJS({
    printable: "printArea", // The id of the element you want to print
    type: "html", // Specifies the type of content (html)
    scanStyles: true,
    css: [
      "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
    ], // Optional: specify external CSS for better print formatting
  });
};

const handleDowloadPdf = () => {
  const element = document.getElementById("printArea");
  const options = {
    margin: 0.5,
    filename: "voucher-detail.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
  };

  html2pdf().from(element).set(options).save();

};
  return (
    <div className="flex gap-5">
      <div id="printArea" className="w-[17cm] bg-white rounded-lg  ">
        <div className="flex justify-end items-start mb-8 px-9">
          <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold">
            LOGO
          </div>
        </div>
        <div id="printArea" className="w-[15cm] bg-white m-4 ">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-lg text-black font-bold mb-2">INVOICE</h1>
              <p className=" text-black text-xs">{data?.data?.voucher_id}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-black">Invoice to</p>
              <p className="py-2 px-5 text-sm text-black">
                {data?.data?.customer_name}
              </p>
              <p className=" text-xs text-black">Date: {data?.data?.sale_date}</p>
            </div>
          </div>
        </div>
        <table className="w-full mb-8  mt-5">
          <thead>
            <tr className="text-black text-left ">
              <th className="py-2 px-5 text-sm">NO.</th>
              <th className="py-2 px-5 text-sm">Description</th>
              <th className="py-2 px-5 text-sm">Quantity</th>
              <th className="py-2 px-5 text-sm">Price</th>
              <th className="py-2 px-5 text-sm">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.data.records.map((record, index) => (
              <tr key={record.id}>
                <td className="py-2 px-5 text-sm text-black">{index + 1}</td>
                <td className="py-2 px-5 text-sm text-black">
                  {record.product.product_name}
                </td>
                <td className="py-2 px-5 text-sm text-black">
                  {record.quantity}
                </td>
                <td className="py-2 px-5 text-sm text-black">
                  {record.product.price}$
                </td>
                <td className="py-2 px-5 text-sm text-black">{record.cost}$</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-b border-gray-300">
              <td
                className="text-sm text-black text-right py-2 px-7"
                colSpan={4}
              >
                Total
              </td>
              <td className="py-2 px-4 text-sm text-black">
                {parseFloat(data.data.total).toFixed(2)}$
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td
                className="text-sm text-black text-right py-2 px-7"
                colSpan={4}
              >
                Tax
              </td>
              <td className="py-2 px-4 text-sm text-black">
                {parseFloat(data.data.tax).toFixed(2)}$
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td
                className="text-sm text-black text-right py-2 px-7"
                colSpan={4}
              >
                Net Total
              </td>
              <td className="py-2 px-4 text-sm text-black">
                {parseFloat(data.data.netTotal).toFixed(2)}$
              </td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-between items-center ">
          <div className="flex justify-between mb-12">
            <div>
              <h3 className="text-black mb-2">PAYMENT METHODS</h3>
              <p className="text-xs text-black">
                KBZ, Wave: 09-796191823
                <br />
                KBZ Bank: 0000-0000-0000-0000
                <br />
                AYA Bank: your-venmo-handle
                <br />
                PAYPAL: poupaypal@email.com
              </p>
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div>
              <h3 className="text-black mb-2">MMSIT</h3>
              <p className="text-xs text-black">
                Address: 1234 Pyay Street
                <br />
                Yangone
                <br />
                Phone: 09-796191823
                <br />
                Email: pou214518@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 pt-4">
          <p className="mt-4 text-center text-sm text-black">Thank You</p>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button
            onClick={handlePrint}
            className="text-white mt-3  bg-emerald-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Print Voucher
          </button>
          <button
            onClick={handleDowloadPdf}
            className="text-white mt-3  bg-emerald-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Download Pdf
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetailCard;

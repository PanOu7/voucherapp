import React, { useRef, useState } from "react";
import {
    HiDesktopComputer,
  HiSearch,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import useSWR from "swr";
import VoucherListRow from "./VoucherListRow";
import VoucherListEmptyStage from "./VoucherListEmptyStage";
import { debounce } from 'lodash'
import { MdOutlineClear } from "react-icons/md";
import Pagination from "./Pagination";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VoucherList = () => {
  // const [voucherSearch,setVoucherSearch] = useState("")
  const [fetchUrl,setFetchUrl]=useState(`${import.meta.env.VITE_API_URL}/vouchers`)

  const voucherInput=useRef();

  const { data, isLoading, error } = useSWR(
    // voucherSearch
    //   ? `${
    //       import.meta.env.VITE_API_URL
    //     }/vouchers?voucher_id_like=${voucherSearch}`
    //   : `${import.meta.env.VITE_API_URL}/vouchers`,
    fetchUrl,
    fetcher
  );

  const handleVoucherSearch=debounce((e)=>{
    // setVoucherSearch(e.target.value);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`)
  },500)


  const handleVoucherClearSearch=()=>{
    // setVoucherSearch('');
    voucherInput.current.value='';
  }

  const updateFetchUrl=(url)=>{
    setFetchUrl(url)
  }

  // if(isLoading){
  //   return (
  //     <p>Loading----</p>
  //   )
  // }
  // console.log(data);

  return (
    <>
      <div className="flex justify-between items-center mb-3 ">
        <div className="">
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              ref={voucherInput}
              onChange={handleVoucherSearch}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Voucher "
            />
            {/* {voucherSearch && (
              <button
                className="absolute right-2 top-0 bottom-0 cursor-pointer m-auto"
                onClick={handleVoucherClearSearch}
              >
                <MdOutlineClear
                  fill="red"
                  className="active:scale-90 duration-200"
                />
              </button>
            )} */}
          </div>
        </div>

        <div className="">
          <Link
            to={"/sale"}
            className="text-white bg-emerald-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center gap-3 "
          >
            Create Sale
            <HiDesktopComputer />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #Voucher ID
              </th>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <VoucherListEmptyStage />
            {!isLoading &&
              data?.data?.map((voucher, index) => (
                <VoucherListRow key={voucher.id} voucher={voucher} />
              ))}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </>
  );
};

export default VoucherList;

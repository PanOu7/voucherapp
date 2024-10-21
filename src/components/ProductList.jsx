import React, { useRef, useState } from "react";
import { HiPlus, HiSearch } from "react-icons/hi";
import useSWR from "swr";
import ProduckListSkeletonLoader from "./ProduckListSkeletonLoader";
import ProductListEmptyStage from "./ProductListEmptyStage";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
//import {throttle} from 'lodash'
import { debounce } from "lodash";
import { MdOutlineClear } from "react-icons/md";
import Pagination from "./Pagination";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ProductList = () => {
  const [search, setSearch] = useState("");

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products"
  );

  const searchInput = useRef();
  // console.log(search);

  // console.log(import.meta.env.VITE_API_URL);

  const { data, isLoading, error } = useSWR(
    fetchUrl, // Fixed URL construction
    fetcher
  );

  //   if(isLoading){
  //     return <p>Loading...</p>
  //   }
  // console.log(data);

  //   const handleProductSearch=(e)=>{
  // setSearch(e.target.value);
  //   }

  // const handleProductSearch =throttle((e) => {
  // setSearch(e.target.value);
  //   console.log(e.target.value);
  // },500)

  const handleProductSearch = debounce((e) => {
    setSearch(e.target.value);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`);
  }, 500);

  const handleClearSearch = () => {
    setSearch("");
    searchInput.current.value = "";
  };

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-3 ">
        <div className="">
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              ref={searchInput}
              onChange={handleProductSearch}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product "
            />
            {search && (
              <button
                className="absolute right-2 top-0 bottom-0 cursor-pointer m-auto"
                onClick={handleClearSearch}
              >
                <MdOutlineClear
                  fill="red"
                  className="active:scale-90 duration-200"
                />
              </button>
            )}
          </div>
        </div>

        <div className="">
          <Link
            to="/product-create"
            className="text-white bg-emerald-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center gap-3 "
          >
            Add New Product
            <HiPlus />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Updated At
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProduckListSkeletonLoader />
            ) : data?.data?.length === 0 ? (
              <ProductListEmptyStage />
            ) : (
              data?.data?.map((product) => (
                <ProductRow product={product} key={product.id} />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading  && (
        <Pagination links={data?.links} meta={data?.meta} updateFetchUrl={updateFetchUrl} />
      )}
    </>
  );
};

export default ProductList;

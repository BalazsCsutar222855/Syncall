import {TrashIcon, FaceSmileIcon, StarIcon, EllipsisVerticalIcon} from "@heroicons/react/24/solid";
import {useState} from "react";

export const Event = () => {
    return(
        <tr className="mb-10 hover:bg-white hover:shadow-md duration-200 cursor-pointer">
            <td className="px-2 py-4 w-2/5 text-sm font-medium text-gray-800 whitespace-nowrap ">
                <div className="flex items-center">
                    <div className="p-2 bg-orange-500 mr-2 rounded-md text-white">
                        <FaceSmileIcon className="h-4 w-4 text-right" ></FaceSmileIcon>
                    </div>
                    <p className="font-bold">Page "Test" has been created.</p>
                </div>
            </td>
            <td className=" py-4 w-1/3  text-sm text-gray-800 whitespace-nowrap">
                <div className="flex gap-2">
                    <div className="bg-red-500 p-2 text-white rounded-md">Shelf</div>
                    <div className="bg-purple-500 p-2 text-white rounded-md">Book</div>
                    <div className="bg-green-500 p-2 text-white rounded-md">Chapter</div>
                </div>
            </td>
            <td className="py-4 w-1/3 text-sm text-gray-400 whitespace-nowrap ">
                3
            </td>
            <td className="px-2 py-4 w-1/3 text-sm text-gray-400 font-medium text-right whitespace-nowrap">
                <p>2023.10.02</p>
            </td>
        </tr>
    )
}

export const Favourite = ({title, page_id}) => {
    return (
        <a className="p-5 bg-white h-36 w-full rounded-md overflow-auto cursor-pointer" href={`/books/preview?id=${page_id}`}>
            <div className="p-2 bg-yellow-300 mr-5 rounded-md w-12 h-12 flex justify-center items-center">
                <StarIcon className="w-6 h-6 text-white"></StarIcon>
            </div>
            <div className="flex flex-col mt-2">
                <p className="font-bold ">{title}</p>
                <p className="text-xs text-gray-500 break-all overflow-hidden">
                    Python exam definitions etc
                </p>
            </div>
        </a>

    )
}

export const Branches = ({ icon: IconComponent, title, desc, branch, setBranch, id, setLoading, branchTree, setBranchTree, isChecked, handleRadioChange, checkedId}) => {

    return (
        <a className={`p-5 bg-gray-100 h-36 w-full rounded-md overflow-auto cursor-pointer ${checkedId === id ? "shadow-md" : ""} duration-200`} href={branchTree.Chapter ? `/books/preview?id=${id}` : undefined}>
            <div className={`text-white rounded-md w-full h-12 flex justify-between`}>
               <div className={`p-2 ${branchTree.Shelf ? branchTree.Book ? branchTree.Chapter ? "bg-blue-600" : "bg-green-600" : "bg-purple-600" : "bg-red-600" } text-white mr-5 rounded-md w-12 h-12 flex items-center justify-center`}>
                   <IconComponent className="w-6 h-6" />
               </div>
                <EllipsisVerticalIcon onClick={() => handleRadioChange(id)} className="w-6 h-6 text-gray-500 " />
            </div>
            <div className="flex flex-col mt-2" onClick={() => {

                if (!branchTree.Shelf) {
                    branchTree.Shelf = {title, id};
                }
                else if (!branchTree.Book ) {
                    branchTree.Book = {title, id};
                }
                else if (!branchTree.Chapter) {
                    branchTree.Chapter = {title, id};
                }


                setBranchTree({ ...branchTree });


            }}>
                <p className="font-bold ">{title}</p>
                <p className="text-xs text-gray-500 break-all overflow-hidden">
                    {desc}
                </p>
            </div>
        </a>

    )
}
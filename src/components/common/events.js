import {TrashIcon, FaceSmileIcon, StarIcon} from "@heroicons/react/24/solid";

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

export const Favourite = () => {
    return (
        <a className="p-5 bg-white h-36 w-full rounded-md overflow-auto cursor-pointer" href='/books/preview?id=1334-242545-1314fsdf3'>
            <div className="p-2 bg-yellow-300 mr-5 rounded-md w-12 h-12 flex justify-center items-center">
                <StarIcon className="w-6 h-6 text-white"></StarIcon>
            </div>
            <div className="flex flex-col mt-2">
                <p className="font-bold ">Shelfs</p>
                <p className="text-xs text-gray-500 break-all overflow-hidden">
                    4 shelfes 4 shelfes 4 shelfes 4 shelfes 4 shelfes 4 shelfes
                </p>
            </div>
        </a>

    )
}

export const Branches = ({ icon: IconComponent, title, desc, branch, setBranch, id, setLoading}) => {
    return (
        <a className="p-5 bg-white h-36 w-full rounded-md overflow-auto cursor-pointer" href={branch.Chapter ? `/books/preview?id=${id}` : undefined}
            onClick={() => {
                setLoading(true); 
                setBranch(prevBranch => {
                    // Clone the previous state
                    const updatedBranch = { ...prevBranch };
                  
                    if (!updatedBranch.Shelf) {
                      updatedBranch.Shelf = title;
                    } else if (!updatedBranch.Book) {
                      updatedBranch.Book = title;
                    } else if (!updatedBranch.Chapter) {
                      updatedBranch.Chapter = title;
                    } else if (!updatedBranch.Page) {
                      updatedBranch.Page = title;
                    }
                  
                    return updatedBranch;
                  });
                  
                  
                  
            }}
        >
            <div className={`p-2 ${branch == "Shelfs" ? "bg-red-600 ": branch == "Books" ? "bg-purple-600" : branch == "Chapters" ? "bg-green-600" : branch == "Pages" ? "bg-blue-600" : null } text-white mr-5 rounded-md w-12 h-12 flex justify-center items-center`}>
                <IconComponent className="w-5 h-5" />
            </div>
            <div className="flex flex-col mt-2">
                <p className="font-bold ">{title}</p>
                <p className="text-xs text-gray-500 break-all overflow-hidden">
                    {desc}
                </p>
            </div>
        </a>

    )
}
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage, setPage } from "../filter/filterSlice";

export default function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.currentPage);
  const totalPages = useSelector((state) => state.filter.totalPages);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className='flex items-center gap-5 border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <button
        className='cursor-pointer'
        onClick={() => dispatch(previousPage())}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          className={`border rounded py-1 px-3 cursor-pointer ${
            currentPage === page && "bg-primary text-light"
          } hover:bg-primary hover:text-light transition`}
          key={page}
          onClick={() => dispatch(setPage(page))}
        >
          {page}
        </button>
      ))}
      <button
        className='cursor-pointer text-dark'
        onClick={() => dispatch(nextPage())}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    return (
        <div className="flex gap-2 mt-4">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        currentPage === index + 1 ? "bg-blue-500" : "bg-gray-400 hover:bg-blue-300"
                    } transition-all duration-300`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
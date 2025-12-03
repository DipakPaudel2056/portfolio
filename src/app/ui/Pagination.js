"use client";

import Link from "next/link";
import "./Pagination.css"
export default function Pagination({ currentPage, totalPages }) {
  const pages = [];

  for (let i = 0; i < totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {/* Previous Button */}
      <Link
        href={`?page=${currentPage - 1}`}
        className={`page-item ${currentPage <= 0 ? "disabled" : ""}`}
      >
        &laquo;
      </Link>

      {/* Page Numbers */}
      {pages.map((pageNum) => (
        <Link
          key={pageNum}
          href={`?page=${pageNum}`}
          className={`page-item ${pageNum === currentPage ? "active" : ""}`}
        >
          {pageNum + 1}
        </Link>
      ))}

      {/* Next Button */}
      <Link
        href={`?page=${currentPage + 1}`}
        className={`page-item ${currentPage >= totalPages - 1 ? "disabled" : ""}`}
      >
        &raquo;
      </Link>
    </div>
  );
}

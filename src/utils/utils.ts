export const getPageNumbers = (currentPage: number, totalPages: number, maxButtons: number) => {
    const half = Math.floor(maxButtons / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);
  
    // 페이지 범위가 부족할 때 조정
    if (currentPage <= half) {
      end = Math.min(totalPages, maxButtons);
    } else if (currentPage + half > totalPages) {
      start = Math.max(1, totalPages - maxButtons + 1);
    }
  
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
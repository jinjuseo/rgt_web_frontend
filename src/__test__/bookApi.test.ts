// import { rest } from 'msw';  
// import { setupServer } from 'msw/node';
// import { addBook, updateBook, deleteBook } from '@/api/book'  // API 함수들
// import { waitFor } from '@testing-library/react';

// // Mock 서버 핸들러
// const server = setupServer(
//   rest.post('/api/books', (req, res, ctx) => {
//     return res(ctx.status(201), ctx.json({ message: 'Book added successfully' }));
//   }),
//   rest.put('/api/books/:id', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json({ message: 'Book updated successfully' }));
//   }),
//   rest.delete('/api/books/:id', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json({ message: 'Book deleted successfully' }));
//   })
// );

// // 서버 시작 및 종료
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('Book API tests', () => {
//   it('should add a book successfully', async () => {
//     const bookData = {
//       title: 'Test Book',
//       writer: 'Test Writer',
//       createdAt: '2024-01-01',
//       price: 10000,
//       quantity: 10,
//       description: 'Test Description',
//       publisher: 'Test Publisher',
//       salesVolume:0,
//       starRating:0,
//     };

//     const response = await addBook(bookData);
//     expect(response.status).toBe(201);
//     expect(response.data.message).toBe('Book added successfully');
//   });

//   it('should update a book successfully', async () => {
//     const updatedData = {
//       title: 'Updated Book',
//       writer: 'Updated Writer',
//       createdAt: '2024-02-01',
//       price: 20000,
//       quantity: 5,
//       description: 'Updated Description',
//       publisher: 'Updated Publisher',
//       salesVolume:0,
//       starRating:0,
//     };

//     const response = await updateBook('123', updatedData);
//     expect(response.status).toBe(200);
//     expect(response.data.message).toBe('Book updated successfully');
//   });

//   it('should delete a book successfully', async () => {
//     const response = await deleteBook('123');
//     expect(response.status).toBe(200);
//     expect(response.data.message).toBe('Book deleted successfully');
//   });
// });
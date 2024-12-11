import { addBook, updateBook, deleteBook, getBooks } from '@/api/book'; 
import { BookType } from '@/types/aboutBook';

describe('Book API tests', () => {
  test('book create - addBook', async () => {
    const bookData = {
        title: 'Test Book',
        writer: 'Test Writer',
        createdAt: '2024-01-01',
        price: 10000,
        quantity: 10,
        description: 'Test Description',
        publisher: 'Test Publisher',
        salesVolume: 0,
        starRating: 0,
        imageUrl:'',
    };

    const response = await addBook(bookData);
    expect(response.status).toBe(201);

  });

  let testData:BookType;
  let testDataId:string;
  test('book read - getBooks', async () => {
    const response = await getBooks();
    expect(response.status).toBe(200);
    if(response.status===200){
        testData = response.data[0];
        if(testData.id) testDataId =testData.id;
    }
  });
  test('book update - updateBook', async () => {
  
    const updatedData = {
    ...testData,
      title: 'Updated Book',
      
    };
    const response = await updateBook(testDataId, updatedData);
    expect(response.status).toBe(200);
  });

  test('book delete - deleteBook', async () => {
    const response = await deleteBook(testDataId);
    expect(response.status).toBe(200);

  });
});

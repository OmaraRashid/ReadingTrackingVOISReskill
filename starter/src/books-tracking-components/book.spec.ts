import React from 'react';
import { updateBook } from '../Redux/actions/index';
import { Book } from '../Redux/interface/book';

describe('Book component', () => {
    const book: Book = {
        id: '123',
        title: 'Test Book',
        authors: ['John Doe'],
        shelf: 'currentlyReading',
        subtitle: '',
        publisher: '',
        publishedDate: '',
        description: '',
        industryIdentifiers: [],
        readingModes: {
        text: false,
        image: false
        },
        pageCount: 0,
        printType: '',
        categories: [],
        averageRating: 0,
        ratingsCount: 0,
        maturityRating: '',
        allowAnonLogging: false,
        contentVersion: '',
        panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
        },
        imageLinks: {  smallThumbnail: '',thumbnail: ''},
        language: '',
        previewLink: '',
        infoLink: '',
        canonicalVolumeLink: ''
        };
  it('dispatches updateBook action', () => {
    const mockDispatch = jest.fn();
    const action = updateBook(book, 'wantToRead');
    const result = mockDispatch(action);
    expect(mockDispatch).toHaveBeenCalledWith(action);
  });
});

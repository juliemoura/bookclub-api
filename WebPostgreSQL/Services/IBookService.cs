using System;
using WebPostgreSQL.Models;

namespace WebPostgreSQL.Services
{
	public interface IBookService
	{
		// retornar a lista de livros
		Task<IEnumerable<Book>> GetBooks();

		// retornar livro por id
		Task<Book> GetBook(int id);

		// retornar livros pelo nome
		Task<IEnumerable<Book>> GetBooksByName(string name);

		// criar um novo livro
		Task CreateBook(Book book);

        // atualizar um livro
        Task UpdateBook(Book book);

        // deletar um livro
        Task DeleteBook(Book book);
    }
}


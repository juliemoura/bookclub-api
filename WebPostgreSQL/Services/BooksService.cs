using System;
using Microsoft.EntityFrameworkCore;
using WebPostgreSQL.Models;

namespace WebPostgreSQL.Services
{
	public class BooksService : IBookService
	{
        private readonly Contexto _context;

        public BooksService(Contexto context)
        {
            _context = context;
        }

        // retornar a lista de livros
        public async Task<IEnumerable<Book>> GetBooks()
        {
            try
            {
                return await _context.Books.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        // retornar livros por nome
        public async Task<IEnumerable<Book>> GetBooksByName(string name)
        {
            IEnumerable<Book> books;
            string[] searchTerms = name.ToLower().Split(' ');

            // se o nome não for vazio e não estiver em branco, vai retornar a lista de alunos direto do bd
            if (!string.IsNullOrEmpty(name))
            {   
                books = await _context.Books.Where(n => n.BookName.Contains(name)).ToListAsync();
            }
            else
            {
                books = await GetBooks();
            }
            return books;
        }

        // retornar livros por id
        public async Task<Book> GetBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            return book;
        }

        // criar um livro
        public async Task CreateBook(Book book)
        {
            // primeiro incluímos no contexto e depois inserimos no banco de dados
            _context.Books.Add(book);
            await _context.SaveChangesAsync();
        }

        // atualizar um livro
        public async Task UpdateBook(Book book)
        {
            // primeiro, ele altera a entidade e diz que foi modificada, depois salva as mudanças
            _context.Entry(book).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteBook(Book book)
        {
            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
        }
    }
}


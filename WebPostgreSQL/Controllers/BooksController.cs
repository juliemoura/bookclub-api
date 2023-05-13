using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebPostgreSQL.Models;
using WebPostgreSQL.Services;
using static System.Reflection.Metadata.BlobBuilder;

namespace WebPostgreSQL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private IBookService _bookService;

        public BooksController(IBookService bookService)
        {
            _bookService = bookService;
        }

        // tds os livros
        [HttpGet]
        public async Task<ActionResult<IAsyncEnumerable<Book>>> GetBooks()
        {
            try
            {
                var books = await _bookService.GetBooks();
                return Ok(books);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error to get Books");
            }
        }

        // livros por nome
        [HttpGet("BooksByName")]
        public async Task<ActionResult<IAsyncEnumerable<Book>>>
            GetBooksByName([FromQuery] string name)
        {
            try
            {
                var books = await _bookService.GetBooksByName(name);

                if (books.Count()==0)
                    return NotFound($"Book not found with name: {name}");

                return Ok(books);
            }
            catch
            {
                return BadRequest("Invalid Request");
            }
        }

        // livros por id
        [HttpGet("{id:int}", Name="GetBook")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            try
            {
                var book = await _bookService.GetBook(id);

                if (book == null)
                    return NotFound($"Book not found with id: {id}");

                return Ok(book);

            }
            catch
            {
                return BadRequest("Invalid Request");
            }
        }

        // publicar um novo livro
        [HttpPost]
        public async Task<ActionResult> Create(Book book)
        {
            try
            {
                await _bookService.CreateBook(book);
                return CreatedAtRoute(nameof(GetBook), new { id = book.IdBook }, book);

            }
            catch
            {
                return BadRequest("Invalid Request");
            }
        }

        // editar um livro
        [HttpPut("{id:int}")]
        public async Task<ActionResult> Edit(int id, [FromBody] Book book)
        {
            try
            {
                if(book.IdBook == id)
                {
                    await _bookService.UpdateBook(book);
                    return Ok($"Book with id: {id} has been updated");
                }
                else
                {
                    return BadRequest("Dados inconsistentes");
                }
            }
            catch
            {
                return BadRequest("Invalid Request");
            }
        }

        // deletar um livro
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var book = await _bookService.GetBook(id);

                if(book != null)
                {
                    await _bookService.DeleteBook(book);
                    return Ok($"Book with id {id} has been deleted");
                }
                else
                {
                    return NotFound($"Book with id {id} not found");
                }
            }
            catch
            {
                return BadRequest("Invalid Request");
            }
        }
    }
}

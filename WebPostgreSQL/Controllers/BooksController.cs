using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebPostgreSQL.Models;
using WebPostgreSQL.Services;
using static System.Reflection.Metadata.BlobBuilder;
using OfficeOpenXml;
using System.IO;
using System.Linq;

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

        // fazer download em xml
        [HttpGet("download-all")]
        public async Task<ActionResult> DownloadAllBooks()
        {
            try
            {
                var books = await _bookService.GetBooks();

                // Criando um documento XML para representar tds os livros
                var xmlDoc = new XDocument(new XElement("Books",
                    books.Select(book => new XElement("Book",
                        new XElement("Id", book.IdBook),
                        new XElement("URL", book.UrlImg),
                        new XElement("Name", book.BookName),
                        new XElement("Author", book.AuthorName),
                        new XElement("Price", book.Price),
                        new XElement("Gender", book.Gender),
                        new XElement("Sale", book.Sale)
                    ))
                ));

                string fileName = "all_books.xml";

                // Convertendo o documento XML para um array de bytes
                byte[] xmlBytes = Encoding.UTF8.GetBytes(xmlDoc.ToString());

                // Retornando o arquivo XML para download
                return File(xmlBytes, "application/xml", fileName);
            }
            catch
            {
                return BadRequest("Invalid Request");
            }
        }

        // fazer download em xlsx
        [HttpGet("download-all-xlsx")]
        public async Task<ActionResult> DownloadAllBooksXlsx()
        {
            try
            {
                var books = await _bookService.GetBooks();

                using (var package = new ExcelPackage())
                {
                    var worksheet = package.Workbook.Worksheets.Add("Books");

                    // Definindo os cabeçalhos
                    worksheet.Cells[1, 1].Value = "Id";
                    worksheet.Cells[1, 2].Value = "URL";
                    worksheet.Cells[1, 3].Value = "Name";
                    worksheet.Cells[1, 4].Value = "Author";
                    worksheet.Cells[1, 5].Value = "Price";
                    worksheet.Cells[1, 6].Value = "Gender";
                    worksheet.Cells[1, 7].Value = "Sale";

                    // Dados dos livros
                    int row = 2;
                    foreach (var book in books)
                    {
                        worksheet.Cells[row, 1].Value = book.IdBook;
                        worksheet.Cells[row, 2].Value = book.UrlImg;
                        worksheet.Cells[row, 3].Value = book.BookName;
                        worksheet.Cells[row, 4].Value = book.AuthorName;
                        worksheet.Cells[row, 5].Value = book.Price;
                        worksheet.Cells[row, 6].Value = book.Gender;
                        worksheet.Cells[row, 7].Value = book.Sale;

                        row++;
                    }

                    // Convertendo o arquivo Excel para um array de bytes
                    byte[] excelBytes = package.GetAsByteArray();

                    string fileName = "all_books.xlsx";

                    // Retornando o arquivo XLSX para download
                    return File(excelBytes, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", fileName);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, ex.ToString());
            }
        }
    }
}

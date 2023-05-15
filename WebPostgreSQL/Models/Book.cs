using System;
using System.ComponentModel.DataAnnotations;

namespace WebPostgreSQL.Models
{
    [System.ComponentModel.DataAnnotations.Schema.Table("Books")]
	public class Book
	{
        [Display(Name = "Código do livro")]
        [Key]
        public int IdBook { get; set; }

        [Display(Name = "URL da imagem")]
        public string UrlImg { get; set; }

        [Display(Name = "Nome")]
        public string BookName { get; set; }

        [Display(Name = "Autor")]
        public string AuthorName { get; set; }

        [Display(Name = "Preço")]
        public decimal Price { get; set; }

        [Display(Name = "Genero")]
        public string Gender { get; set; }

        [Display(Name = "Em promoção")]
        public bool Sale { get; set; }

        //[Display(Name = "Ano")]
        //public int Year { get; set; }

        public Book()
        {
            UrlImg = string.Empty;
            BookName = string.Empty;
            AuthorName = string.Empty;
            Gender = string.Empty;
        }
    }
}


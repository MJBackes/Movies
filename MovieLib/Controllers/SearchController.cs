using MovieLib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieLib.Controllers
{
    public class SearchController : ApiController
    {
        ApplicationDbContext db;
        public SearchController()
        {
            db = new ApplicationDbContext();
        }
        // GET: api/Search
        [HttpGet]
        [Route("api/search/{input}")]
        public IHttpActionResult Get([FromUri]string input)
        {
            input = FormatInput(input).ToLower();
            return Ok(db.Movies.Include("Director").Where(m => input.Contains(m.Title) || input.Contains(m.Genre) || input.Contains(m.Director.FirstName) || input.Contains(m.Director.MiddleName) || input.Contains(m.Director.LastName) || input.Contains(m.Director.Prefix) || input.Contains(m.Director.Suffix) || m.Title.Contains(input) || m.Genre.Contains(input) || m.Director.FirstName.Contains(input) || m.Director.MiddleName.Contains(input) || m.Director.LastName.Contains(input)));
        }
        private string FormatInput(string input)
        {
            return input.Replace("A", " ").Replace("B", "/").Replace("C", "?").Replace("D", ",").Replace("E", ".").Replace("F", "'").Replace('G', '"').Replace("H", "[").Replace("I", "{").Replace("J", "]").Replace("K", "}").Replace("L", "=").Replace("M", "+").Replace("N", "-").Replace("O", "_").Replace("P", "(").Replace("Q", ")").Replace("R", "$").Replace("S", "@").Replace("T", "!").Replace("U", "#").Replace("V", "&");
        }
    }
}

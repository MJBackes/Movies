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
        public IHttpActionResult Get(string input)
        {
            return Ok(db.Movies.Include("Director").Where(m => input.Contains(m.Title) || input.Contains(m.Genre) || input.Contains(m.Director.FirstName) || input.Contains(m.Director.MiddleName) || input.Contains(m.Director.LastName) || input.Contains(m.Director.Prefix) || input.Contains(m.Director.Suffix)));
        }
    }
}

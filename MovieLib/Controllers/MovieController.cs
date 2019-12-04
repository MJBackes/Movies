using MovieLib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieLib.Controllers
{
    public class MovieController : ApiController
    {
        public ApplicationDbContext db;
        public MovieController()
        {
            db = new ApplicationDbContext();
        }
        // GET api/values
        //public IHttpActionResult Get()
        //{
        //    return ;
        //}

        //// GET api/values/5
        //public string Get(int id)
        //{
        //    Movie movie = db.Movies
        //    return "value";
        //}

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

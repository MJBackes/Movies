using MovieLib.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieLib.Controllers
{
    public class DirectorController : ApiController
    {
        public ApplicationDbContext db;
        public DirectorController()
        {
            db = new ApplicationDbContext();
        }
        // GET: api/Director
        public IHttpActionResult Get()
        {
            return Ok(db.Directors.Where(d => d != null));
        }

        // GET: api/Director/5
        public IHttpActionResult Get(int id)
        {
            return Ok(db.Directors.Find(id));
        }

        // POST: api/Director
        public void Post([FromBody]Director director)
        {
            db.Directors.Add(new Director { FirstName = director.FirstName, MiddleName = director.MiddleName, LastName = director.LastName, Suffix = director.Suffix, Prefix = director.Prefix, Image = PlaceholderString.PlaceholderStr });
            db.SaveChanges();
        }

        // PUT: api/Director/5
        public void Put(int id, [FromBody]Director director)
        {
            Director directorFromDb = db.Directors.FirstOrDefault(d => d.Id == id);
                directorFromDb.FirstName = director.FirstName;
                directorFromDb.MiddleName = director.MiddleName;
                directorFromDb.LastName = director.LastName;
                directorFromDb.Prefix = director.Prefix;
                directorFromDb.Suffix = director.Suffix;
            if (director.Image != null)
                directorFromDb.Image = director.Image;
            db.SaveChanges();
        }

        // DELETE: api/Director/5
        public void Delete(int id)
        {
            db.Directors.Remove(db.Directors.Find(id));
            db.SaveChanges();
        }
    }
}

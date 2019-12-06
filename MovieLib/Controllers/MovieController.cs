using MovieLib.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet;
using System.Web.Http.Cors;

namespace MovieLib.Controllers
{
    public class MovieController : ApiController
    {
        public ApplicationDbContext db;
        public MovieController()
        {
            db = new ApplicationDbContext();
        }
        //GET api/values
        public IHttpActionResult Get()
        {
            return Ok(db.Movies.Include("Director").Where(m => m != null));
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            return Ok(db.Movies.Include("Director").FirstOrDefault(m => m.Id == id));
        }

        // POST api/values
        public void Post([FromBody]Movie movie)
        {
            int directorId;
            string imgString;
            if (movie.Image != null)
            {
                imgString = movie.Image; 
            }
            else
            {
                imgString = PlaceholderString.PlaceholderStr;
            }
            if (movie.DirectorId != 0)
            {
                directorId = movie.DirectorId;
            }
            else
            {
                Director director = db.Directors.FirstOrDefault(d => d.FirstName == movie.Director.FirstName && d.LastName == movie.Director.LastName && d.MiddleName == movie.Director.MiddleName && d.Suffix == movie.Director.Suffix && d.Prefix == movie.Director.Prefix);
                if (director != null)
                {
                    directorId = director.Id;
                }
                else
                {
                    director = new Director
                    {
                        FirstName = movie.Director.FirstName,
                        MiddleName = movie.Director.MiddleName,
                        LastName = movie.Director.LastName,
                        Prefix = movie.Director.Prefix,
                        Suffix = movie.Director.Suffix
                    };
                    db.Directors.Add(director);
                    db.SaveChanges();
                    directorId = db.Directors.FirstOrDefault(d => d.FirstName == movie.Director.FirstName && d.MiddleName == movie.Director.MiddleName && d.LastName == movie.Director.LastName && d.Prefix == movie.Director.Prefix && d.Suffix == movie.Director.Suffix).Id;
                }
            }
            db.Movies.Add(new Movie
            {
                Title = movie.Title,
                Genre = movie.Genre,
                DirectorId = directorId,
                Runtime = movie.Runtime,
                Image = imgString
        });
            db.SaveChanges();
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Movie movie)
        {
            Movie movieFromDb = db.Movies.Find(id);
            movieFromDb.Title = movie.Title;
            movieFromDb.Genre = movie.Genre;
            Director director = db.Directors.FirstOrDefault(d => d.FirstName == movie.Director.FirstName && d.LastName == movie.Director.LastName && d.MiddleName == movie.Director.MiddleName && d.Prefix == movie.Director.Prefix && d.Suffix == movie.Director.Suffix);
            if (director != null)
                movieFromDb.DirectorId = director.Id;
            else
            {
                db.Directors.Add(new Director { FirstName = movie.Director.FirstName, MiddleName = movie.Director.MiddleName, LastName = movie.Director.LastName });
                db.SaveChanges();
                movieFromDb.DirectorId = db.Directors.FirstOrDefault(d => d.FirstName == movie.Director.FirstName && d.MiddleName == movie.Director.MiddleName && d.LastName == movie.Director.LastName && d.Prefix == movie.Director.Prefix && d.Suffix == movie.Director.Suffix).Id;
            }
            movieFromDb.Runtime = movie.Runtime;
            if(movie.Image != null)
                movieFromDb.Image = movie.Image;
            db.SaveChanges();
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            db.Movies.Remove(db.Movies.Find(id));
            db.SaveChanges();
        }
    }
}

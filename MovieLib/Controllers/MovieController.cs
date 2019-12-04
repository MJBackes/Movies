﻿using MovieLib.Models;
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
        //GET api/values
        public IHttpActionResult Get()
        {
            return Ok(db.Movies.Where(m => m != null));
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            Movie movie = db.Movies.Find(id);
            return Ok(movie);
        }

        // POST api/values
        public void Post([FromBody]Movie movie)
        {
            int directorId;
            Director director = db.Directors.FirstOrDefault(d => d.FirstName == movie.Director.FirstName && d.LastName == movie.Director.LastName && d.MiddleName == movie.Director.MiddleName);
            if (director != null)
            {
                directorId = director.Id;
            }
            else
            {
                db.Directors.Add(new Director { FirstName = movie.Director.FirstName, MiddleName = movie.Director.MiddleName, LastName = movie.Director.LastName });
                directorId = db.Directors.FirstOrDefault(d => d.FirstName == movie.Director.FirstName && d.MiddleName == movie.Director.MiddleName && d.LastName == movie.Director.LastName).Id;
            }
            db.Movies.Add(new Movie
            {
                Title = movie.Title,
                Genre = movie.Genre,
                DirectorId = directorId,
                Runtime = movie.Runtime,
            });
            db.SaveChanges();
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]Movie movie)
        {
            Movie movieFromDb = db.Movies.Find(id);
            movieFromDb.Title = movie.Title;
            movieFromDb.Genre = movie.Genre;
            Director director = db.Directors.FirstOrDefault(d => d.FirstName == movie.Director.FirstName && d.LastName == movie.Director.LastName && d.MiddleName == movie.Director.MiddleName);
            if (director != null)
                movieFromDb.DirectorId = director.Id;
            else 
                db.Directors.Add(new Director { FirstName = movie.Director.FirstName, MiddleName = movie.Director.MiddleName, LastName = movie.Director.LastName });
            movieFromDb.Runtime = movie.Runtime;
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

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace MovieLib.Models
{
    public class Movie
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public int Runtime { get; set; }
        [ForeignKey("Director")]
        public Guid DirectorId { get; set; }
        public Director Director { get; set; }
    }
}
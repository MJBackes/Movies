using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MovieLib.Models
{
    public class Director
    {
        [Key]
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastNme { get; set; }
    }
}